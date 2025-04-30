import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

interface Iuser extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    username: string;
    password: string;
    tempavatar?: string;
    avatar?: string;
    gender?: string;
    DOB?: Date;
    bio?: string;
    public?: Boolean;
    isOnline?: boolean;
    lastSeen?: Date;
    socketId?: string;
    media?: string[];
    friends?: mongoose.Types.ObjectId[];
    RecivedRequest?: mongoose.Types.ObjectId[];
    SendedRequest: mongoose.Types.ObjectId[];
    blockList?: mongoose.Types.ObjectId[];
    typingTo?: mongoose.Types.ObjectId | null;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<Iuser>({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tempavatar: {
        type: String
    },
    avatar: {
        type: String
    },
    gender: {
        type: String,
    },
    DOB: {
        type: Date
    },
    bio: {
        type: String
    },
    public: {
        type: Boolean,
        default: true
    },
    isOnline: {
        type: Boolean,
        default: false
    },
    lastSeen: {
        type: Date
    },
    socketId: {
        type: String
    },
    media: [{
        type: String
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    SendedRequest: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    RecivedRequest: [{
        type: Schema.Types.ObjectId,
        res: "User"
    }],
    typingTo: {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null
    }
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password;
        return ret;
    }
});

export const User = mongoose.model<Iuser>("User", userSchema);