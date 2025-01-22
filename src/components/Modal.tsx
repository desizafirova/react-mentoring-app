import React, { forwardRef, useImperativeHandle, useRef } from 'react';

export type ModalHandle = {
  openModal: () => void;
  closeModal: () => void;
};

const Modal = forwardRef<ModalHandle, { children: React.ReactNode }>(
  function Modal(props, ref) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
      openModal: () => dialogRef.current?.showModal(),
      closeModal: () => dialogRef.current?.close(),
    }));

    return <dialog ref={dialogRef}>{props.children}</dialog>;
  }
);

export default Modal;
