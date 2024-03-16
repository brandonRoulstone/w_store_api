import { config } from 'dotenv';
config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { checkUser } from '../Model/db.js';


const authenticate = async (req, res, next) => {

    const {user_profile, user_email, user_password, user_role, user_image} = req.body;

    const hashedpwd = await checkUser(user_email, user_role);

    bcrypt.compare(user_password, hashedpwd, (err, result) => {
        
        if (err) throw err

        if(result === true){

            const {user_email, user_role} = req.body;

            const token = jwt.sign({user_email:user_email, user_role: user_role}, process.env.SECRET_KEY, {expiresIn: '1h'});

            res.cookie('jwt', token, {httpOnly: false, expiresIn: '1h'});
            
            // console.log(token)
            res.send({
                token: token,
                msg: 'you logged in'
            })

            next(); 

        } else {

            res.send({

                res: res.statusCode,
                msg : 'the password does not match'

            });

        } 
    });
}

export default authenticate;