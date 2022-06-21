import { useState, useEffect, useCallback } from "react";
import { GlobalProvider, GlobalContext } from "./GlobalContext";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./Layouts/Header/index";
import CardsList from "./components/CardsList";
import Card from "./components/Card";
import UserInfos from "./components/UserInfos";
import ScrumTable from "./components/ScrumTable";
import Summary from "./components/Summary";
import Home from "./Layouts/Home/Home";
import Dashboard from "./Layouts/Dashboard/Dashboard";
function App() {
  const [activeUser, setActiveUser] = useState({
    userType: "player",
    userName: "Olivier Chemla",
    userVote: 0,
    userHistory: [],
  });

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
  const [userCount, setUserCount] = useState(0);
  const [countHistory, setCountHistory] = useState<any>([]);

  const cards = Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * 100)
  );

  // Handling Click on Click Event
  const handleClick = useCallback(
    (value: number) => {
      let currentActiveUser = { ...activeUser };
      currentActiveUser.userVote = value;
      setActiveUser(currentActiveUser);
      setUserCount(value);
    },
    [userCount]
  );

  const handleClickHistory = (value: number) => {
    setCountHistory(countHistory.push(value));
  };

  const handleInputChange = (event: any) => {
    setUserCount(event.target.value);
  };

  const updateActiveUsers = () => {
    const updateActiveUsersAfterSubmit = activeUsers.map((user) =>
      user.userName === activeUser.userName
        ? { ...user, userVote: activeUser.userVote }
        : user
    );

    setActiveUsers(updateActiveUsersAfterSubmit);
  };

  useEffect(() => {
    let initialCountHistory = [...countHistory, userCount];
    updateActiveUsers();

    setCountHistory(initialCountHistory);
  }, [userCount, activeUser]);

  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/session/:id" element={<Dashboard />}></Route>
      </Routes>
    </GlobalProvider>
  );
}

export default App;
