import { getUserByEmail } from '../services/user.service.js';
import jwt from 'jsonwebtoken';
import { HttpError } from '../utils/error.js';
import {JWT_KEY}  from '../config/vars.js';

export const loginUserController = async (req, res, next) => {
  try {
    const user = req.body;
    console.log(user)
    const newUser = await getUserByEmail(user.email);
    if (newUser[0] === undefined) throw new HttpError(422, 'Incorrect email');
    if (user.password==newUser[0].password) {
      const token = jwt.sign({ user: newUser[0] }, JWT_KEY);
      res.send({ token: token, user: newUser[0] });
    } else throw new HttpError(422, 'Wrong password provided');
  } catch (error) {
    next(error);
  }
};
