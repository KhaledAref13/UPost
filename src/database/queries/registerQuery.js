import connection from '../config/index.js';

const registerQuery = ({ fullName, email, username, hashedPassword }) => {
  const sql = {
    text: `INSERT INTO users (full_name, email, username, password)
        VALUES ($1, $2, $3, $4)
        RETURNING id, full_name, email, username`,
    values: [fullName, email, username, hashedPassword],
  };
  return connection.query(sql);
};

export default registerQuery;
