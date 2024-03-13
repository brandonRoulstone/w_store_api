import { config } from 'dotenv';
config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { checkUser } from '../Model/db.js';


const authenticate = async (req, res, next) => {

    const {user_profile, user_email, user_password, user_role, user_image} = req.body;

    const hashedpwd = await checkUser(user_email);

    bcrypt.compare(user_password, hashedpwd, (err, result) => {
        
        if (err) throw err

        if(result === true){

            const {user_email} = req.body;

            const token = jwt.sign({user_email:user_email}, process.env.SECRET_KEY, {expiresIn: '1d'});

            res.cookie('jwt', token, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000 , secure: true  });
            
            console.log(token)

            next(); 

        } else {

            res.send({
                
                msg : 'the password does not match'

            });

        } 
    });
}

export default authenticate;