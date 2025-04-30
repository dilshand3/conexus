import jwt from "jsonwebtoken";
import { Response } from "express";

export const generateTokenAndSetCookie = async (res: Response, userId: string): Promise<string> => {
    const usId = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
        expiresIn: "7d"
    });

    res.cookie("usId", usId, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/"
    });

    return usId;
};