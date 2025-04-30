import { URL } from "../model/url.model";
import { Request, Response } from "express";
import { generateString } from "../utils/generateString";

interface IResponse {
    success: boolean;
    message: string;
    data?: object;
}

interface IReqCreateUrl {
    originalUrl: string;
}

const createUrl = async (req: Request<{}, {}, IReqCreateUrl>, res: Response<IResponse>): Promise<any> => {
    const { originalUrl } = req.body;
    try {
        if (!originalUrl) {
            return res.status(400).json({
                success: false,
                message: "Original URL Required"
            })
        }
        let randomString: string;
        let existedUrl;

        do {
            randomString = generateString();
            existedUrl = await URL.findOne({ shortUrl: randomString });
        } while (existedUrl);


        const createdURL = `${req.protocol}://${req.get("host")}/${randomString}`;

        const newURL = await URL.create({
            originalUrl,
            shortUrl: createdURL
        });

        if (!newURL) {
            return res.status(400).json({
                success: false,
                message: "Short URL not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "URL short successfully",
            data: newURL
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Internal Server error while create ShortURL "
        })
    }
}

const redirectUrl = async (req: Request, res: Response<IResponse>): Promise<any> => {
    const { shortUrl } = req.params;
    try {
        const urlData = await URL.findOne({ shortUrl: `${req.protocol}://${req.get("host")}/${shortUrl}` });

        if (!urlData) {
            return res.status(404).json({
                success: false,
                message: "Short URL not found"
            });
        }

        res.redirect(urlData.originalUrl);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error while Redirecting URL"
        });
    }
};

const deleteURl = async (req: Request, res: Response<IResponse>): Promise<any> => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Id required to delete the URL'
            })
        }

        const deleteURl = await URL.findByIdAndDelete(id);

        if (!deleteURl) {
            return res.status(400).json({
                success: false,
                message: "Can't delete the URL"
            })
        }

        res.status(200).json({
            success: true,
            message: "URL deleted succesfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Internal Server Error while Deleting URL"
        })
    }
}

export { createUrl, redirectUrl, deleteURl }