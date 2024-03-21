import { config } from 'dotenv';
config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { checkUser, checkProfile } from '../Model/db.js';


const authenticate = async (req, res, next) => {

    const {user_profile, user_email, user_password, user_role, user_image} = req.body;

    try {
        const hashedpwd = await checkUser(user_email, user_role);

        const validUserIsLoggedIn = await checkProfile(user_email);

        bcrypt.compare(user_password, hashedpwd, (err, result) => {
            
            if (err) throw err
    
            if(result === true){
    
                const {user_email, user_role} = req.body;
    
                const token = jwt.sign({user_email:user_email, user_role: user_role}, process.env.SECRET_KEY, {expiresIn: '1h'});
                const refreshToken = jwt.sign({ user_email: user_email, user_role: user_role }, process.env.REFRESH_TOKEN, { expiresIn: '1d' });
    
                res.cookie('jwt', token, {httpOnly: false, expiresIn: '1h'});
                res.cookie('refreshToken', refreshToken, { httpOnly: false, expiresIn: '1d' });

                res.send({
                    token: token,
                    refreshToken: refreshToken,
                    role: user_role,
                    email: user_email,
                    name: user_profile,
                    isLogged: validUserIsLoggedIn,
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
    } catch (error) {

        console.error('Error during authentication:', error);
        res.status(500).send({ msg: 'Internal server error' });
        
    }
}

export default authenticate;