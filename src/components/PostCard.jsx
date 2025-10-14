import { Link } from "react-router-dom";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

export default function PostCard({ post, setPosts }) {
  function toggleLike(id) {
    setPosts(prev =>
      prev.map(p =>
        p.id === id
          ? {
              ...p,
              likedByMe: !p.likedByMe,
              likeCount: p.likedByMe ? p.likeCount - 1 : p.likeCount + 1,
            }
          : p
      )
    );
  }

  return (
    <article className="card">
      <div className="card-header">
        <img className="avatar" src={post.avatar} alt={`${post.author} avatar`} />
        <strong className="author">
          <Link to={`/u/${post.author}`}>@{post.author ?? "unknown"}</Link>
        </strong>
      </div>

      <img
        className="card-img"
        src={post.imageUrl}
        alt={post.alt || "post image"}
        loading="lazy"
      />

      <div className="actions">
        <button
          type="button"
          className="like-btn"
          aria-pressed={post.likedByMe}
          onClick={() => toggleLike(post.id)}
        >
          {post.likedByMe ? "♥ Liked" : "♡ Like"}
        </button>
        <span className="like-count">{post.likeCount} likes</span>
      </div>

      <p className="caption">
        <strong>@{post.author ?? "unknown"}</strong> {post.caption}
      </p>

      <CommentList comments={post.comments ?? []} />
      <CommentForm postId={post.id} setPosts={setPosts} />
    </article>
  );
}
