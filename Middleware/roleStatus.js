import { checkRoleStatus } from "../Model/db.js";

const isRoleEquiqToAdmin = async (req, res, next) => {

    // checks the user role in the body
    const {user_profile, user_email, user_password, user_role, user_image} = req.body;

    // function checking the role status
    const role = await checkRoleStatus(user_role);

    if(role === 'admin'){

        next();

    } else {

        res.sendStatus(403);

    }
} 

export default isRoleEquiqToAdmin;