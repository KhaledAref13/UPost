import connection from '../config/index.js';

const removeLikeQuery = ({ userId, postId }) => {
  const sql = {
    text: 'DELETE FROM likes WHERE user_id = $1 AND post_id = $2',
    values: [userId, postId],
  };
  return connection.query(sql);
};

export default removeLikeQuery;
