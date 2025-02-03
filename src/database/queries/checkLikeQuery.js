import connection from '../config/index.js';

const checkLikeQuery = ({ userId, postId }) => {
  const sql = {
    text: `SELECT * FROM likes WHERE user_id = $1 and post_id = $2`,
    values: [userId, postId],
  };
  return connection.query(sql);
};

export default checkLikeQuery;
