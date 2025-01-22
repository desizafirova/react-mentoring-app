import Button from './Button';

export default function Header() {
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
            <Button href="/sessions" textOnly={false}>
              Upcoming Sessions
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
