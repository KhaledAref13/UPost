import connection from '../config/index.js';

const addLikeQuery = ({ userId, postId }) => {
  const sql = {
    text: 'INSERT INTO likes (user_id, post_id) VALUES ($1, $2) RETURNING *',
    values: [userId, postId],
  };
  return connection.query(sql);
};

export default addLikeQuery;
