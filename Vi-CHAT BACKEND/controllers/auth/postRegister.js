const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const postRegister = async (req,res) => {
    try{
        const { username, mail, password } = req.body;

        //check if user exists
        const userExists = await User.exists({ mail });

        if (userExists) {
            return res.status(409).send("Email is already present.");
        }

        //encrypt password

        const encryptPassword = await bcrypt.hash(password, 10);

        //create user and save in db
        

    } catch(err){
        return res.status(500).send("Error occured. Please try again");
    }
};

module.exports = postRegister;