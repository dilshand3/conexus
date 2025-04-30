import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface IAuthenticatedRequest extends Request {
    userId?: string;
}

interface ITokenPayload extends JwtPayload {
    userId: string;
}

export const verifyToken = async (req: IAuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    const usId = req.cookies.usId;

    if (!usId) {
        res.status(401).json({ success: false, message: "UnAuthorized- no token provided" });
        return;
    }

    try {
        const decoded = jwt.verify(usId, process.env.JWT_SECRET as string) as ITokenPayload;

        if (!decoded.userId) {
            res.status(401).json({ success: false, message: "Unauthorized- invalid token" });
            return;
        }

        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log("Error in verifyToken", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};