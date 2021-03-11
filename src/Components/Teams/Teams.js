import React, { useEffect, useState } from "react";
import EachTeam from "../EachTeam/EachTeam";
import "./Teams.css";
const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  // console.log(teams);
  return (
    <div>
      {/* <div className="image">
        <div className="background"></div>
      </div> */}

      <div className="m-5">
        <div className="row">
          {teams.map((team) => (
            <EachTeam team={team}></EachTeam>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
