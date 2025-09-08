// src/components/ConsentModal.jsx
import React, { useEffect } from 'react';

const ConsentModal = ({ show, onAccept, onReject, children }) => {
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = prev);
  }, [show]);

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-title"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-50 bg-[#000000] text-white p-6 md:p-8 rounded-md w-[94vw] md:w-[940px] h-[80vh] md:h-[500px] shadow-xl">
        <h2 id="consent-title" className="text-xl font-bold mb-4">
          EOSI Finance Private & Public Token Sale: Terms & Conditions
        </h2>

        <div className="overflow-y-auto pr-2" style={{ maxHeight: '320px' }}>
          {children}
        </div>

        <div className="flex gap-3 pt-5">
          <button
            className="bg-[#02FA1B] text-black py-[6px] px-4 rounded-full text-sm font-semibold hover:opacity-80"
            onClick={onAccept}
          >
            AGREE
          </button>
          <button
            className="bg-[#FA0404] text-black py-[6px] px-4 rounded-full text-sm font-semibold hover:opacity-80"
            onClick={onReject}
          >
            DISAGREE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;
