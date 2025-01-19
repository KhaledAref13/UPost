import connection from '../config/index.js';

const getUserByEmailQuery = ({ email }) => {
  const sql = {
    text: `SELECT * FROM users WHERE email = $1`,
    values: [email],
  };
  return connection.query(sql);
};

export default getUserByEmailQuery;
