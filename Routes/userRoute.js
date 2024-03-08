import express from 'express';
import controller from '../Controllers/usercontroller.js';
import onHashBefore from '../Middleware/hashPwd.js';
import isRoleEquiqToAdmin from '../Middleware/roleStatus.js';

const router = express.Router();

router.route('/') 
    .get(isRoleEquiqToAdmin,controller.getAllUSers)
    .post(isRoleEquiqToAdmin,onHashBefore,controller.addNewUser)


router.route('/:id')
    .get(isRoleEquiqToAdmin,controller.getUser)
    .delete(isRoleEquiqToAdmin, controller.deleteUserByID)


export default router