import bcrypt from 'bcrypt';

const hashPassword = (password) => bcrypt.hash(password, 10);

const comparePassword = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

export { hashPassword, comparePassword };
