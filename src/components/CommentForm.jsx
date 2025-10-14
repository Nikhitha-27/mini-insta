import { useState } from "react";

export default function CommentForm({ postId, setPosts, me = "nikhitha" }) {
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;

    setPosts(prev =>
      prev.map(p =>
        p.id === postId
          ? { ...p, comments: [...(p.comments ?? []), { id: crypto.randomUUID(), author: me, text: t }] }
          : p
      )
    );
    setText("");
  }

  return (
    <form onSubmit={onSubmit} style={{ display:"flex", gap:8, padding:"0 12px 12px" }}>
      <input
        aria-label="Add a comment"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a comment…"
        style={{ flex:1, padding:"8px 10px", border:"1px solid #ddd", borderRadius:8, background:"#fff", color:"#111" }}
      />
      <button type="submit" disabled={!text.trim()}
        style={{ padding:"8px 12px", border:"1px solid #ddd", borderRadius:8, background:"#fff", color:"#111" }}>
        Post
      </button>
    </form>
  );
}
