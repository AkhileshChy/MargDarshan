export const authorizeMentor = async (req, res, next) => {
    try {
        if (req.user.role !== "mentor") {
            return res.status(401).json({ message: "Unauthorized User - Mentor Only Route" });
        }
        next();
    } catch (error) {
        console.log("Error in authorizeMentor middleware: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const authorizeMentee = async (req, res, next) => {
    try {
        if (req.user.role !== "mentee") {
            return res.status(401).json({ message: "Unauthorized User - Mentee Only Route" });
        }
        next();
    } catch (error) {
        console.log("Error in authorizeMentee middleware: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}