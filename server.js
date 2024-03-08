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
// import auth from './Middleware/verifyJwt.js';
import { checkRoleStatus } from './Model/db.js';

const app = express();
const PORT = process.env.MYSQL_ADDON_PORT || 6896;

app.use(express.static('./Static'));

app.use(cors({
    origin: 'http://localhost:3310',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
// app.use(auth)
// app.use(verifyJwt)


app.post('/login', authenticate, (req, res) => { 
    res.json({
        msg: 'Welcome back to the store'
    });
})
app.use('/products', productsRoute);
app.use('/cart',verifyJwt, cartRoute);
app.use('/users',verifyJwt, userRoute);

app.listen(PORT, console.log(`server running on http://localhost:${PORT}`));


 

{/* <blockquote class="imgur-embed-pub" lang="en" data-id="a/PlyvO0z" data-context="false" ><a href="//imgur.com/a/PlyvO0z"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}
// https://i.imgur.com/8Pvhmao.mp4