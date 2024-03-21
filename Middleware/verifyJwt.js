import { config } from 'dotenv';
config();
import jwt from 'jsonwebtoken'
 
const auth = async (req, res, next) => {  
    let { cookie } = req.headers;
    
    // setting the refresh token in an object
    const refreshTokens = {}
    
    let tokenInHeader = cookie && cookie.split('=')[1];
    
    if (tokenInHeader === undefined) {

        return res.status(401).send({ msg: "No valid token" });
        
    }

    jwt.verify(tokenInHeader, process.env.SECRET_KEY, (err, user) => {

        if (err) {

            if (err.name === 'TokenExpiredError') {

                // reset the token in the header   
                const refreshToken = req.headers['REFRESH_TOKEN'];

                // if the refresh token exists or...
                // if the refresh exists at the index
                if (refreshToken && refreshTokens[refreshToken]) {

                    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {

                        if (err) {

                            return res.status(403).json({ error: 'Invalid Token' });

                        } else {
                            
                            const newToken = jwt.sign({ user_email: decoded.user_email }, process.env.REFRESH_TOKEN, { expiresIn: '1d' });

                            res.setHeader('Authorization', newToken);
                            
                            next();

                        }
                    });

                }
            } else {

                return res.status(403).json({ error: 'Invalid Token' });

            }
        }
        req.user_email = user;
        next();
    });
};

export default auth;














// const auth = async (req, res, next) => {  
//     let {cookie} = req.headers;
    
//     // setting the refresh token in an object
//     const refreshTokens = {}
    
//     // checks if theres a cookie and then splits it
//     let tokenInHeader = cookie && cookie.split('=')[1];
//     console.log(tokenInHeader)
    
//     if (tokenInHeader === undefined) {
        
//         res.status(401).send({msg:"No valid token"});   
        
//     } else{

//         console.log(tokenInHeader);

//         jwt.verify(tokenInHeader, process.env.SECRET_KEY, (err, user) => {

//             if (err) {

//                 if(err.name === 'TokenExpiredError') {

//                     // reset the token in the header   
//                     const refreshToken = req.headers['REFRESH_TOKEN'];

//                     // if the refresh token exists or...
//                     // if the refresh exists at the index
//                     if(refreshToken && refreshTokens[refreshToken]){

//                         jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {

//                             if(err){

//                                 return res.send(403).json({error: 'Invalid Token'});

//                             } else {

//                                 // Assigns a new token to the user once the 
//                                 const newToken = jwt.sign({user_email: decoded.user_email}, process.env.REFRESH_TOKEN, {expiresIn: '1d'});

//                                 res.setHeader('Authorization', newToken);

//                                 next(); 
//                             }
//                         })
//                     }
//                 }
//             }
//             req.user_email = user;
//         });
 
//         next();
//     }

     
// } 