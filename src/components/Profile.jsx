import { useParams, Link } from "react-router-dom";
import PostCard from "./PostCard";

export default function Profile({ posts, setPosts }) {
  const { handle } = useParams();
  const mine = posts.filter(p => p.author.toLowerCase() === handle.toLowerCase());
  return (
    <section aria-label={`Profile of ${handle}`}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
        <h2 style={{margin:0}}>@{handle}</h2>
        <Link to="/" style={{textDecoration:"none"}}>← Home</Link>
      </div>
      {mine.length === 0 ? <p>No posts yet.</p> : mine.map(p => (
        <PostCard key={p.id} post={p} setPosts={setPosts} />
      ))}
    </section>
  );
}
