import connection from '../config/index.js';

const getPostByIdQuery = ({ id }) => {
  const sql = {
    text: `SELECT * FROM posts WHERE id = $1`,
    values: [id],
  };
  return connection.query(sql);
};

export default getPostByIdQuery;
