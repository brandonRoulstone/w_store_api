import express from 'express';
import { config } from 'dotenv';
config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import productsRoute from './Routes/productsRoute.js';
import cartRoute from './Routes/cartRoute.js';
import verifyJwt from './Middleware/verifyJwt.js'
import userRoute from './Routes/userRoute.js';
import authenticate from './Middleware/signToken.js';
import registerRoute from './Routes/registerRoute.js';

const app = express();
const PORT = process.env.MYSQL_ADDON_PORT || 6896;

app.use(express.static('./Static'));

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.post('/login', authenticate, (req, res) => { 
    res.json({
        msg: 'Welcome back to the store'
    });
});

app.use('/register', registerRoute);

app.delete('/logout', (req, res) => {
    res.clearCookie('jwt')
    res.json({
        msg : 'logged out succesfuly'
    });
});

app.use('/products', productsRoute);
app.use('/cart',verifyJwt, cartRoute);
app.use('/users',verifyJwt, userRoute);

app.listen(PORT, console.log(`server running on http://localhost:${PORT}`));





// {
//     "user_profile": "JohnDoe",
//     "user_email": "JD1@gmail.com",
//     "user_password": "john",
//     "user_role": "admin",
//     "user_image": "nothing"
// }
 

{/* <blockquote class="imgur-embed-pub" lang="en" data-id="a/PlyvO0z" data-context="false" ><a href="//imgur.com/a/PlyvO0z"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}
// https://i.imgur.com/8Pvhmao.mp4