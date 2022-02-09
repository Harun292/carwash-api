import User from '../models/users.js';

export const getUserByEmail = async email => {
    console.log(JSON.stringify(User))
    const userInDb = await User.query().where('email', email);
    return userInDb;
  };