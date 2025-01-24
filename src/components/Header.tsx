import Button from './Button';
import UpcomingSessions from '../pages/UpcomingSessions';
import Modal, { ModalHandle } from './Modal';

import { useRef } from 'react';

export default function Header() {
  const modalRef = useRef<ModalHandle>(null);

  const openModal = () => {
    modalRef.current?.open();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  function handleUpcomingSessions() {
    openModal();
  }

  return (
    <header id="main-header">
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li>
            <Button href="/" textOnly={true}>
              Our Mission
            </Button>
          </li>
          <li>
            <Button href="/sessions" textOnly={true}>
              Browse Sessions
            </Button>
          </li>
          <li>
            <Button onClick={handleUpcomingSessions} textOnly={false}>
              Upcoming Sessions
            </Button>
          </li>
        </ul>
      </nav>

      <Modal ref={modalRef}>
        <UpcomingSessions onClose={closeModal} />
      </Modal>
    </header>
  );
}
