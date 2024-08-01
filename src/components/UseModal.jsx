import { useState } from "react";
import Modal from "./Modal";

const UseModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={openModal}
        className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
      >
        Open Modal
      </button>
      <Modal showModal={showModal} closeModal={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <p className="text-base">
          This is a reusable modal component with a beautiful design, using
          Tailwind CSS and Framer Motion.
        </p>
        <button className="mt-4 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
          Close Modal
        </button>
      </Modal>
    </div>
  );
};

export default UseModal;
