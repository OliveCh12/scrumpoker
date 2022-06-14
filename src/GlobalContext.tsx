import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const GlobalContext = createContext<any | undefined>(undefined);

export const GlobalProvider = (props: Props) => {
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
  ]);

  return (
    <GlobalContext.Provider value={[activeUsers, setActiveUsers]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
