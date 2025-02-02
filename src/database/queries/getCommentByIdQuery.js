import connection from '../config/index.js';

const getCommentByIdQuery = ({ id }) => {
  const sql = {
    text: `SELECT * FROM comments WHERE id = $1`,
    values: [id],
  };
  return connection.query(sql);
};

export default getCommentByIdQuery;
