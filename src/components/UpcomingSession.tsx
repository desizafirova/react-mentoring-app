import Button from './Button';

export default function UpcomingSession() {
  return (
    <div className="upcomming-session">
      <h3>title</h3>
      <p>text</p>
      <time>time</time>
      <Button textOnly={true}>Cancel</Button>
    </div>
  );
}
