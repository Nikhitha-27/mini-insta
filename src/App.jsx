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
  // Read once on mount
  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : seedPosts;
    } catch {
      return seedPosts;
    }
  });

  // Save whenever posts change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    } catch {
      /* ignore */
    }
  }, [posts]);

  return (
    <div className="app">
      <Navbar />
      <main className="main">
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
