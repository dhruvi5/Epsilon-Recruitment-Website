// PricingModal.js
import React from "react";
import Modal from "react-modal";

// Ensure the app element is set to improve accessibility
Modal.setAppElement("#root");

const PricingModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Pricing Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <button onClick={onRequestClose} className="close-button">
        X
      </button>
      <section className="py-20 dark:bg-gray-100 dark:text-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-bold tracking-wider uppercase dark:text-violet-600">
              Pricing
            </span>
            <h2 className="text-4xl font-bold lg:text-5xl">
              Choose your best plan
            </h2>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            {/* Pricing options here */}
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default PricingModal;
