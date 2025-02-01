import connection from '../config/index.js';

const getAllPostsQuery = () => {
  const sql = {
    text: `SELECT 
    posts.id AS post_id,
    posts.content AS post_content,
    posts.created_at AS post_created_at,
    posts.updated_at AS post_updated_at,

    users.id AS user_id,
    users.full_name AS user_full_name,
    users.username AS user_username,
    users.email AS user_email,

    COALESCE(like_count.count, 0) AS like_count,
    COALESCE(comment_count.count, 0) AS comment_count,

    COALESCE(json_agg(
        json_build_object(
            'comment_id', comments.id,
            'content', comments.content,
            'created_at', comments.created_at,
            'updated_at', comments.updated_at,
            'user', json_build_object(
                'id', comment_users.id,
                'full_name', comment_users.full_name,
                'username', comment_users.username,
                'email', comment_users.email
            )
        )
    ) FILTER (WHERE comments.id IS NOT NULL), '[]') AS comments_list

    FROM posts

    JOIN users ON posts.user_id = users.id

    LEFT JOIN (
    SELECT post_id, COUNT(*) AS count FROM likes GROUP BY post_id
    ) AS like_count ON posts.id = like_count.post_id

    LEFT JOIN (
    SELECT post_id, COUNT(*) AS count FROM comments GROUP BY post_id
    ) AS comment_count ON posts.id = comment_count.post_id

    LEFT JOIN comments ON posts.id = comments.post_id
    LEFT JOIN users AS comment_users ON comments.user_id = comment_users.id

    GROUP BY 
        posts.id, 
        users.id, 
        like_count.count, 
        comment_count.count`,
  };
  return connection.query(sql);
};

export default getAllPostsQuery;
