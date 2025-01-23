import { useParams } from 'react-router-dom';

import { SESSIONS } from '../dummy-sessions.ts';
import Button from '../components/Button.tsx';
import Modal, { ModalHandle } from '../components/Modal.tsx';
import { FormEvent, useRef } from 'react';
import Input from '../components/Input.tsx';
import { useSessionsContext } from '../store/sessions-context.tsx';

export default function SessionPage() {
  const modalRef = useRef<ModalHandle>(null);
  const sessionCtx = useSessionsContext();
  const params = useParams<{ id: string }>();

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  const openModal = () => {
    modalRef.current?.open();
  };
  const closeModal = () => {
    modalRef.current?.close();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    if (loadedSession) {
      sessionCtx.addSession(loadedSession);
    }
    closeModal();
  };

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  return (
    <main id="session-page">
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p>
              <Button onClick={openModal} textOnly={false}>
                Book session
              </Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
      <Modal ref={modalRef}>
        <form onSubmit={handleSubmit}>
          <h3>Book Session</h3>
          <Input id="name" type="text" label="Your name" />
          <Input id="email" type="text" label="Your email" />
          <div className="flex-container-btns">
            <Button onClick={closeModal} textOnly={true}>
              Cancel
            </Button>
            <Button textOnly={false}>Book Session</Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}
