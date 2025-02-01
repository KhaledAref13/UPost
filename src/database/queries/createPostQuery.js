import connection from '../config/index.js';

const createPostQuery = ({ userId, content }) => {
  const sql = {
    text: `INSERT INTO posts (user_id, content) VALUES ($1, $2) RETURNING *`,
    values: [userId, content],
  };
  return connection.query(sql);
};

export default createPostQuery;
