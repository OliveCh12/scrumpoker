import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ActiveUser = {
  userType: "player" | "spectator";
  userName: string;
  userVote: number | null;
  userHistory: Array<number>;
};

export const GlobalContext = createContext<any | undefined>(undefined);

export const GlobalProvider = (props: Props) => {
  const [activeSession, setActiveSession] = useState({
    id: "5429034",
    startedAt: new Date(),
  });

  // Currrent user connected on the session.
  const [activeUser, setActiveUser] = useState<ActiveUser>({
    userType: "player",
    userName: "Olivier Chemla",
    userVote: null,
    userHistory: [],
  });
  // All users active in a session.
  const [activeUsers, setActiveUsers] = useState([
    {
      userType: "player",
      userName: "Olivier Chemla",
      userVote: 5,
    },
    {
      userType: "player",
      userName: "Clark Devoer",
      userVote: 3,
    },
    {
      userType: "player",
      userName: "Alax Berokash",
      userVote: 5,
    },
    {
      userType: "player",
      userName: "Franceso Adalok",
      userVote: 3,
    },
    {
      userType: "player",
      userName: "Adanas Bolberg",
      userVote: 8,
    },
    {
      userType: "player",
      userName: "Mathile Levier",
      userVote: 3,
    },
    {
      userType: "player",
      userName: "Bloomberg Kalash",
      userVote: 2,
    },
    {
      userType: "player",
      userName: "Joahcline Devar",
      userVote: null,
    },
    {
      userType: "player",
      userName: "Natalis Fracsler",
      userVote: null,
    },
  ]);

  return (
    <GlobalContext.Provider
      value={{
        session: [activeSession, setActiveSession],
        user: [activeUser, setActiveUser],
        users: [activeUsers, setActiveUsers],

      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
