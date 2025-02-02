import connection from '../config/index.js';

const deleteCommentQuery = ({ id }) => {
  const sql = {
    text: 'DELETE FROM comments WHERE id = $1 RETURNING *',
    values: [id],
  };
  return connection.query(sql);
};

export default deleteCommentQuery;
