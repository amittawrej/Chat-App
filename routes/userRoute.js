import express from 'express'
import { getOtherUsers, login, logout, register } from '../controllers/userController.js';
import isAuth from '../middelware/isAuth.js';

const router=express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/').get(getOtherUsers);


export default router;