import { useSessionsContext } from '../store/sessions-context';
import Button from './Button';

type UpcomingSessionProps = {
  title: string;
  summary: string;
  date: string;
  id: string;
  onClose: () => void;
};

export default function UpcomingSession({
  title,
  summary,
  date,
  id,
  onClose,
}: UpcomingSessionProps) {
  const { removeSession, upcomingSessions } = useSessionsContext();

  function handleRemoveSession() {
    removeSession(id);
    onClose();
  }

  return (
    <div className="upcomming-session">
      <h3>{title}</h3>
      <p>{summary}</p>
      <time>{date}</time>

      <Button onClick={handleRemoveSession} textOnly={true}>
        Cancel
      </Button>
    </div>
  );
}
