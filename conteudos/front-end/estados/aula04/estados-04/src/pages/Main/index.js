import { useState } from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Post from "../../components/Post";
import "./style.css";

function Main() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
      text: "Texto qualquer Texto qualquer Texto qualquer Texto qualquer Texto qualquer Texto qualquer",
    },
    {
      id: 2,
      title: "Post 2",
      text: "Texto qualquer Texto qualquer Texto qualquer Texto qualquer Texto qualquer Texto qualquer",
    },
    {
      id: 3,
      title: "Post 3",
      text: "Texto qualquer Texto qualquer Texto qualquer Texto qualquer Texto qualquer Texto qualquer",
    },
    {
      id: 4,
      title: "Post 4",
      text: "Texto qualquer Texto qualquer Texto qualquer Texto qualquer Texto qualquer Texto qualquer",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  function handleToggleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <div className="container">
      <Header handleToggleModal={handleToggleModal} />
      <div className="container-posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <Modal handleToggleModal={handleToggleModal} modalOpen={modalOpen} setPosts={setPosts} posts={posts} />
    </div>
  );
}

export default Main;
