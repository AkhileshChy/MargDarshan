import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minLength: 6
        },
        role: {
            type: String,
            required: true,
            enum: ["mentor", "mentee"]
        },
        profilePicture: {
            type: String,
            default: "" 
        },
        jobTitle: {
            type: String,
            default: "",
        },
        company: {
            type: String,
            default: ""
        },
        skills: [
            {
                type: String,
                default: []
            }
        ],
        bio: {
            type: String,
            default: ""
        },
        linkedinUrl: {
            type: String,
            default: ""
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;