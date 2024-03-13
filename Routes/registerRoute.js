import express from 'express';
import controller from '../Controllers/usercontroller.js';
import onHashBefore from '../Middleware/hashPwd.js';

const router = express.Router();


router.route('/')
    .post(onHashBefore,controller.addNewUser)



export default router;
