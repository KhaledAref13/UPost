import connection from '../config/index.js';

const deletePostQuery = ({ id }) => {
  const sql = {
    text: 'DELETE FROM posts WHERE id = $1 RETURNING *',
    values: [id],
  };

  return connection.query(sql);
};

export default deletePostQuery;
