import cloudinary from "../lib/cloudinary.js";
import User from "../models/user.model.js";

export const mentorDetails = async (req, res) => {
    try {
        const { profilePicture, jobTitle, company, skills, bio, linkedinUrl } = req.body;
        if (!profilePicture){
            return res.status(400).json({ message: "Please Upload your Profile Picture" });
        }
        if (!jobTitle || !company || !skills || !bio || !linkedinUrl){
            return res.status(400).json({ message: "All fields are required" });
        }
        const data = {jobTitle, company, skills, bio, linkedinUrl};
        if (profilePicture) {
            const result = await cloudinary.uploader.upload(profilePicture);
            data.profilePicture = result.secure_url;
        }
        const user = await User.findByIdAndUpdate(req.user._id, { $set: data }, { new: true }).select("-password");
        res.json(user);
    } catch (error) {
        console.error("Error in mentorDetails controller:", error);
		res.status(500).json({ message: "Server error" });
    }
}