import Button from './Button';

export default function Navigation() {
  return (
    <div>
      <Button href="/" textOnly={true}>
        Our Mission
      </Button>
      <Button href="/sessions" textOnly={true}>
        Browse Sessions
      </Button>
      <Button href="/sessions" textOnly={false}>
        Upcoming Sessions
      </Button>
    </div>
  );
}
