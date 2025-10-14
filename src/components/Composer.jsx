import { useState } from "react";

export default function Composer({ setPosts, me = "nikhitha" }) {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const url = imageUrl.trim();
    if (!url) return;

    const newPost = {
      id: crypto.randomUUID(),
      author: me,
      avatar: `https://i.pravatar.cc/80?u=${encodeURIComponent(me)}`,
      imageUrl: url,
      alt: "new post image",
      caption: caption.trim(),
      likedByMe: false,
      likeCount: 0,
      comments: [],
    };

    setPosts(prev => [newPost, ...prev]);
    setImageUrl(""); setCaption("");
  }

  return (
    <form onSubmit={onSubmit} style={styles.card} aria-label="Create a new post">
      <h3 style={{margin:"0 0 8px"}}>Create Post</h3>
      <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="Image URL (required)" aria-label="Image URL" style={styles.input}/>
      <input value={caption} onChange={e => setCaption(e.target.value)} placeholder="Caption (optional)" aria-label="Caption" style={styles.input}/>
      <button type="submit" disabled={!imageUrl.trim()} style={styles.button}>Share</button>
    </form>
  );
}
const styles = {
  card:{ background:"#fff", border:"1px solid #eee", borderRadius:12, padding:12, margin:"12px 0" },
  input:{ width:"100%", padding:"8px 10px", border:"1px solid #ddd", borderRadius:8, marginBottom:8, background:"#fff", color:"#111" },
  button:{ padding:"8px 12px", border:"1px solid #ddd", borderRadius:8, background:"#fff", color:"#111", cursor:"pointer" },
};
