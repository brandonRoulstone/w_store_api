import bcrypt from 'bcrypt';

import { addUser } from '../Model/db.js';



const onHashBefore = (req, res, next) => {

    const {user_profile, user_email, user_password, user_role, user_image} = req.body;

    bcrypt.hash(user_password, 10, async (err, hashPwd) => {

        if (err) throw err
        
        await addUser(user_profile, user_email, hashPwd, user_role, user_image);
        
        console.log(`hello ${user_profile}`);
        
        next();
    });
}
 
export default onHashBefore;