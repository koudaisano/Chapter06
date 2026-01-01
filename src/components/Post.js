import { post } from '../data/post';
import styles from './Post.module.css';

const Post = () => {
    return (
  <ul className={styles.container}>
    {post.map((post) => (
      <li key={post.id} className={styles.li}>
        <h2>{post.title}</h2>
        <img src={post.thumbnailUrl} alt={post.title} />
        <p>{post.content}</p>
      </li>
    ))}
  </ul>
  );
};

export default Post;