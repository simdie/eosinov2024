import React, { useEffect, useRef } from 'react';

const ConsentModal = ({ show, onAccept, onReject, children }) => {
  const agreeBtnRef = useRef(null);

  useEffect(() => {
    if (!show) return;
    // Lock page scroll (desktop + mobile)
    const prevOverflow = document.body.style.overflow;
    const prevTouch = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    // Focus the agree button
    setTimeout(() => agreeBtnRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouch || '';
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-title"
      className="fixed inset-0 z-[999999] flex items-center justify-center pointer-events-auto"
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {/* Backdrop (captures all clicks) */}
      <div
        className="absolute inset-0 bg-black/70 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Panel */}
      <div
        className="relative z-[1000000] bg-[#000000] text-white p-6 md:p-8 rounded-md w-[94vw] md:w-[940px] h-[80vh] md:h-[500px] shadow-xl"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <h2 id="consent-title" className="text-xl font-bold mb-4">
          ❗️&amp;Attention&amp; ❗️
        </h2>

        <div className="overflow-y-auto pr-2" style={{ maxHeight: '320px' }}>
          {children}
        </div>

        <div className="flex gap-3 pt-5">
          <button
            ref={agreeBtnRef}
            className="bg-[#02FA1B] text-black py-[6px] px-4 rounded-full text-sm font-semibold hover:opacity-80 focus:outline-none focus:ring"
            onClick={onAccept}
          >
            AGREE
          </button>
          <button
            className="bg-[#FA0404] text-black py-[6px] px-4 rounded-full text-sm font-semibold hover:opacity-80 focus:outline-none focus:ring"
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
