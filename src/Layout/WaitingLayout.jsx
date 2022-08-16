import React from "react";
import WaitingList from "../components/cards/WaitingList";
import users from "../data/users";

const WaitingLayout = () => {
  return (
    <div className="flex flex-wrap">
      {users.map(
        ({
          fullName,
          snapkitManager,
          username,
          pack,
          points,
          newSnapUserName,
          snapUserName,
        }) => (
          <>
            {snapUserName !== newSnapUserName ? (
              <div className="p-2 w-1/4">
                <WaitingList
                  name={fullName}
                  userName={username}
                  point={points}
                  pack={pack}
                  oldSnap={snapUserName}
                  snapKit={snapkitManager}
                  newSnap={newSnapUserName}
                />
              </div>
            ) : null}
          </>
        )
      )}
    </div>
  );
};

export default WaitingLayout;
