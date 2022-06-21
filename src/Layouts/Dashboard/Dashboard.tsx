import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

type Props = {};

import Header from "../Header/index";

import UserInfos from "../../components/UserInfos";
import CardsList from "../../components/CardsList";
import Card from "../../components/Card";
import ScrumTable from "../../components/ScrumTable";
import Summary from "../../components/Summary";

const Dashboard = (props: Props) => {
  const { session, user, users } = useContext(GlobalContext);

  const [activeSession, setActiveSession] = session;
  const [activeUser, setActiveUser] = user;
  const [activeUsers, setActiveUsers] = users;

  React.useEffect(() => {
    console.log(activeUsers);
  }, [activeUsers]);

  // Update value inside ActiveUser & ActiveUsers state.
 async function handleUserVote(value: number) {
    setActiveUser({ ...activeUser, userVote: value });
    const updateActiveUser = [...activeUsers].map((user) =>
      user.userName === activeUser.userName
        ? { ...user, userVote: activeUser.userVote }
        : user
    );

    setActiveUsers(updateActiveUser);
  }

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <Header id={activeSession.id} />
        <div className="dashboard__panel dashboard__panel--controller">
          <UserInfos
            value={activeUser.userVote}
            userName={activeUser.userName}
            userType={activeUser.userType}
          />
          <CardsList>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
              (card: any, index: number) => (
                <Card
                  value={index + 1}
                  onCardClick={() => handleUserVote(index + 1)}
                  userCount={activeUser.userVote}
                  key={index}
                />
              )
            )}
          </CardsList>
        </div>
        <div className="dashboard__panel dashboard__panel--stats">
          <ScrumTable
            data={activeUsers}
            activeUser={activeUser}
            setSelected={(callback) => {
              setActiveUser({ ...activeUser, userName: callback });
              return callback;
            }}
          />
        </div>
        <div className="dashboard__panel dashboard__panel--infos">
          <Summary data={activeUsers} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
