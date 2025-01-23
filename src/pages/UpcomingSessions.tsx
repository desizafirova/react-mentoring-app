import Button from '../components/Button';
import UpcomingSession from '../components/UpcomingSession';
import { useSessionsContext } from '../store/sessions-context';

type UpcomingSessionProps = {
  onClose: () => void;
};

export default function UpcomingSessions({ onClose }: UpcomingSessionProps) {
  const { upcomingSessions } = useSessionsContext();

  return (
    <>
      <div className="upcoming-session">
        {upcomingSessions.map((session) => (
          <UpcomingSession
            key={session.id}
            title={session.title}
            summary={session.summary}
            date={session.date}
            id={session.id}
            onClose={onClose}
          />
        ))}
        {upcomingSessions.length === 0 && <p>No upcoming sessions...</p>}
      </div>
      <div>
        <Button onClick={onClose} textOnly={false}>
          Close
        </Button>
      </div>
    </>
  );
}
