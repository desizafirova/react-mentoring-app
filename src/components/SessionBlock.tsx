import { useNavigate } from 'react-router-dom';
import Button from './Button';

type SessionBlockProps = {
  title: string;
  summary: string;
  image: string;
  id: string;
};

export default function SessionBlock({
  title,
  summary,
  image,
  id,
}: SessionBlockProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/sessions/${id}`);
  }

  return (
    <div className="session-item">
      <img src={image} alt="descriptive photo about the session" />
      <div className="session-data">
        <h3>{title}</h3>
        <p>{summary}</p>
        <div className="actions">
          <Button onClick={handleClick} textOnly={false}>
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}
