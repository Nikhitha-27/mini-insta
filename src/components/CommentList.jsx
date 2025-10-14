export default function CommentList({ comments = [] }) {
    if (!comments.length) {
      return <p style={{padding:"0 12px 12px", color:"#666"}}>Be the first to comment…</p>;
    }
    return (
      <ul style={{ listStyle:"none", padding:"0 12px 12px", margin:0 }}>
        {comments.map(c => (
          <li key={c.id} style={{ marginBottom:8 }}>
            <strong>@{c.author}</strong> {c.text}
          </li>
        ))}
      </ul>
    );
  }
  