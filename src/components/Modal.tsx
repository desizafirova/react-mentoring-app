import React, { forwardRef, useImperativeHandle, useRef } from 'react';

export type ModalHandle = {
  open: () => void;
  close: () => void;
};

const Modal = forwardRef<ModalHandle, { children: React.ReactNode }>(
  function Modal(props, ref) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
      open: () => dialogRef.current?.showModal(),
      close: () => dialogRef.current?.close(),
    }));

    return (
      <dialog className="modal" ref={dialogRef}>
        {props.children}
      </dialog>
    );
  }
);

export default Modal;
