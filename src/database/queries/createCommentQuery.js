import connection from '../config/index.js';

const createCommentQuery = ({ postId, userId, content }) => {
  const sql = {
    text: `INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3) RETURNING *`,
    values: [postId, userId, content],
  };
  return connection.query(sql);
};

export default createCommentQuery;
