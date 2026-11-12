'use client';
import { createPortal } from 'react-dom';

function Modal({ children, onClose }) {
  return createPortal(
    <div
      onClick={onClose}
      onTouchMove={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm overflow-hidden"
    >
      <div
        onTouchMove={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
