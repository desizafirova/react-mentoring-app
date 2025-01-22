import Button from './Button';

type SessionBlockProps = {
  title: string;
  summary: string;
  image: string;
};

export default function SessionBlock({
  title,
  summary,
  image,
}: SessionBlockProps) {
  return (
    <div className="session-item">
      <img src={image} alt="descriptive photo about the session" />
      <div className="session-data">
        <h3>{title}</h3>
        <p>{summary}</p>
        <div className="actions">
          <Button textOnly={false}>Learn more</Button>
        </div>
      </div>
    </div>
  );
}
