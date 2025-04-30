import { Request, Response } from "express";
import { User } from "../model/user.model";
import { generateTokenAndSetCookie } from "../utils/cookies";
import bcrypt from "bcrypt";
import { v4 as uuIdv4 } from 'uuid';
import fs from 'fs/promises';
import path from 'path';

interface IsignUpReq {
    name: string;
    username: string;
    password: string
}

interface IResponse {
    success: boolean;
    message: string;
    data?: object;
    usId?: string;
}

const signUp = async (req: Request<{}, {}, IsignUpReq>, res: Response<IResponse>): Promise<any> => {
    try {
        const { name, username, password } = req.body;
        if (!name || !username || !password) {
            return res.status(400).json({
                success: false,
                message: "All filed Required"
            })
        }
        const existedUser = await User.findOne({ username })

        if (existedUser) {
            return res.status(400).json({
                success: false,
                message: "username already exist"
            })
        }

        const createUser = await User.create({
            name,
            username,
            password
        })

        if (!createUser) {
            return res.status(400).json({
                success: false,
                message: "User creation failed"
            })
        }

        const usId = await generateTokenAndSetCookie(res, createUser._id.toString());

        res.status(200).json({
            success: true,
            message: "User Created succesfully",
            data: createUser,
            usId
        })

    } catch (error) {
        console.log(`Internal server problem due to ${error}`);
        res.status(404).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

interface IloginReq {
    username: string;
    password: string;
}

const login = async (req: Request<{}, {}, IloginReq>, res: Response<IResponse>): Promise<any> => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "All field required"
            })
        }

        const existedUser = await User.findOne({ username })
        if (!existedUser) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        const isPasswordValid = await bcrypt.compare(password, existedUser.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            })
        }

        const usId = await generateTokenAndSetCookie(res, existedUser._id.toString());
        res.status(200).json({
            success: true,
            message: "User Logged In succesfully",
            data: existedUser,
            usId
        })

    } catch (error) {
        console.log(`Internal server problem due to ${error}`);
        res.status(404).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

interface IAuthenticatedRequest extends Request {
    userId?: string;
}

const shareUser = async (req: IAuthenticatedRequest, res: Response<IResponse>): Promise<any> => {
    try {
        const id = req.userId;
        const user = await User.findById(id);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "User share succesfully",
            data: user
        })
    } catch (error) {
        console.log(`Internal server problem due to ${error}`);
        res.status(404).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const logout = async (req: Request, res: Response<IResponse>): Promise<any> => {
    try {
        res.cookie("usId", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 0,
            path: "/"
        });

        return res.status(200).json({
            success: true,
            message: "User logged out successfully"
        });
    } catch (error) {
        console.log(`Logout error: ${error}`);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const completeProfile = async (req: IAuthenticatedRequest, res: Response<IResponse>): Promise<any> => {
    try {
        const { gender, DOB, bio } = req.body;
        const userId = req.userId;
        if (!gender || !DOB || !bio) {
            return res.status(400).json({
                success: false,
                message: "All field required"
            })
        }
        const updatedUser = await User.findByIdAndUpdate(userId, { gender, DOB, bio }, { new: true })
        if (!updatedUser) {
            return res.status(400).json({
                success: false,
                message: "User not updated"
            })
        }

        res.status(200).json({
            success: true,
            message: "User updated succesfully",
            data: updatedUser
        })

    } catch (error) {
        console.log(`Login error: ${error}`);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

const uploadTempAvatar = async (req: IAuthenticatedRequest, res: Response<IResponse>): Promise<any> => {
    try {
        const userId = req.userId;

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });
        }

        const uniqueFileName = `${uuIdv4()}-${req.file.originalname}`;
        const uploadDir = path.join(__dirname, "../../uploads/avatars");
        const filePath = path.join(uploadDir, uniqueFileName);

        await fs.mkdir(uploadDir, { recursive: true });

        await fs.writeFile(filePath, req.file.buffer);

        const fileUrl = `${req.protocol}://${req.get("host")}/avatars/${uniqueFileName}`;

        const user = await User.findByIdAndUpdate(
            userId,
            { tempavatar: fileUrl },
            { new: true }
        );

        if (!user) {
            await fs.unlink(filePath).catch(err => console.error(`Failed to delete file: ${err}`));
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Avatar uploaded successfully",
            data: user
        });

    } catch (error) {
        console.error(`Error uploading avatar: ${error}`);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const addFriend = async (req: IAuthenticatedRequest, res: Response<IResponse>): Promise<any> => {
    const userId = req.userId;
    const { friendId } = req.params;
    try {
        const sender = await User.findById(userId);
        const receiver = await User.findById(friendId);
        if (!sender || !receiver) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        if (sender.friends?.includes(receiver._id) || receiver.friends?.includes(sender._id)) {
            return res.status(409).json({
                success: false,
                message: "User already Friends"
            })
        }

        sender.SendedRequest.push(receiver._id);
        receiver.RecivedRequest?.push(sender._id)

        await sender.save();
        await receiver.save();

        res.status(200).json({
            success: true,
            message: "Friend Req sent succesfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const acceptFriend = async (req: IAuthenticatedRequest, res: Response<IResponse>): Promise<any> => {
    const userId = req.userId;
    const { friendId } = req.params;
    try {
        const user = await User.findById(userId);
        const requestedUser = await User.findById(friendId)
        if (!user || !requestedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        if (!user.RecivedRequest?.includes(requestedUser._id)) {
            return res.status(401).json({
                success: false,
                message: "User didn't send request"
            })
        }

        user.friends?.push(requestedUser._id);
        user.RecivedRequest = user.RecivedRequest?.filter(
            (id) => id.toString() !== requestedUser._id.toString()
        );
        requestedUser.friends?.push(user._id);
        requestedUser.SendedRequest = requestedUser.SendedRequest?.filter(
            (id) => id.toString() !== user._id.toString()
        );

        await user.save();
        await requestedUser.save();
        res.status(200).json({
            success: true,
            message: "both user become friend"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}


export { signUp, login, shareUser, logout, completeProfile, uploadTempAvatar, addFriend,acceptFriend }