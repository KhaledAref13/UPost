import connection from '../config/index.js';

const getUserByUsernameQuery = ({ username }) => {
  const sql = {
    text: `SELECT * FROM users WHERE username = $1`,
    values: [username],
  };
  return connection.query(sql);
};

export default getUserByUsernameQuery;
