import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { seedPosts } from "./data/posts";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Composer from "./components/Composer";
import Profile from "./components/Profile";
import "./index.css";

const STORAGE_KEY = "mini-insta-posts";

export default function App() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : seedPosts;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Composer setPosts={setPosts} />
                <Feed posts={posts} setPosts={setPosts} />
              </>
            }
          />
          <Route path="/u/:handle" element={<Profile posts={posts} setPosts={setPosts} />} />
        </Routes>
      </main>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    background: "#fafafa",
    minHeight: "100vh",
  },
  main: { maxWidth: 680, margin: "24px auto", padding: "0 16px" },
};
