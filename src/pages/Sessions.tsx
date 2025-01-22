import SessionBlock from '../components/SessionBlock.tsx';
import { SESSIONS } from '../dummy-sessions.ts'; // normally, we would probably load that from a server

export default function SessionsPage() {
  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      <article id="sessions-list">
        {SESSIONS.map((session) => (
          <SessionBlock
            key={session.id}
            title={session.title}
            image={session.image}
            summary={session.summary}
            id={session.id}
          />
        ))}
      </article>
    </main>
  );
}
