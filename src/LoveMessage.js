// src/LoveMessage.js
import React, { useState } from "react";
import Modal from "./Modal";
import "./LoveMessage.css";

const LoveMessage = () => {
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendLoveMessage = () => {
    setMessage(
      `💖🌸 Dear ${name},\n\nEvery moment spent with you is like a beautiful dream come true. Your love is the flower that blooms in my heart, brightening my days with joy and tenderness.\n\nForever yours, with all my love.\n\n🌸💖`
    );
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <h1>Hamza has send you a message.</h1>
      <input
        type="text"
        placeholder="Enter your name first"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
      />
      <br />
      <button
        onClick={sendLoveMessage}
        disabled={!name.trim()}
        className="button"
      >
        Open Me!
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="modal-content">{message}</p>
      </Modal>
    </div>
  );
};

export default LoveMessage;
