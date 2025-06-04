import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function ForumDiscussion() {
  const { userData, setUserData } = useContext(UserContext);
  const [postText, setPostText] = useState("");
  const posts = userData.forumPosts || [];

  const addPost = () => {
    if (!postText.trim()) return;
    const newPosts = [{ id: Date.now(), text: postText }, ...posts];
    setUserData((prev) => ({ ...prev, forumPosts: newPosts }));
    setPostText("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Forum Discussion</h2>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={3}
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="Tulis komentar kamu..."
      />
      <button
        onClick={addPost}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Post
      </button>
      <div>
        {posts.length === 0 ? (
          <p>Belum ada komentar.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="border p-2 mb-2 rounded bg-gray-50"
            >
              {post.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
