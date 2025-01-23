import { createContext, ReactNode, useContext, useReducer } from 'react';

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  duration: number;
  date: string;
};

type SessionsState = {
  upcomingSessions: Session[];
};

type SessionsContextValue = SessionsState & {
  addSession: (session: Session) => void;
  removeSession: (sessionId: string) => void;
};

export const SessionsContext = createContext<SessionsState | null>(null);

export function useSessionsContext() {
  const sessionsContext = useContext(SessionsContext);

  if (sessionsContext === null) {
    throw new Error('SessionsContext is null');
  }

  return sessionsContext;
}

type AddSessionAction = {
  type: 'ADD_SESSION';
  payload: Session;
};

type RemoveSessionAction = {
  type: 'REMOVE_SESSION';
  payload: string;
};

type Action = AddSessionAction | RemoveSessionAction;

function sessionsReducer(state: SessionsState, action: Action): SessionsState {
  if (action.type === 'ADD_SESSION') {
    if (
      state.upcomingSessions.some((session) => session.id === action.payload.id)
    )
      return state;

    return {
      upcomingSessions: [...state.upcomingSessions, action.payload],
    };
  }

  if (action.type === 'REMOVE_SESSION') {
    return {
      upcomingSessions: state.upcomingSessions.filter(
        (session) => session.id !== action.payload
      ),
    };
  }

  return state;
}

export default function SessionsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, {
    upcomingSessions: [],
  });

  const value: SessionsContextValue = {
    upcomingSessions: sessionsState.upcomingSessions,
    addSession: (session: Session) => {
      dispatch({ type: 'ADD_SESSION', payload: session });
    },
    removeSession: (sessionId: string) => {
      dispatch({ type: 'REMOVE_SESSION', payload: sessionId });
    },
  };

  return (
    <SessionsContext.Provider value={value}>
      {children}
    </SessionsContext.Provider>
  );
}
