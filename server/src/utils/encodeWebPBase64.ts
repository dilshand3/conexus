import sharp from "sharp";

const encodeWebPBase64 = async (buffer: Buffer): Promise<string> => {
    const webpBuffer = await sharp(buffer).webp({ quality: 80 }).toBuffer();
    return webpBuffer.toString("base64");
};

export { encodeWebPBase64 }