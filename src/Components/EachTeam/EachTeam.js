import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, Card } from "react-bootstrap";
import {  useHistory } from "react-router-dom";
import './EachTeam.css'

const EachTeam = (props) => {
  const { strTeam, strLeague, strTeamBadge, idTeam } = props.team;
  const history = useHistory();
  const showTeam = (idTeam) => {
    const url = `/team/${idTeam}`;
    history.push(url);
  };
  // console.log(props);
  return (
    <div className="col-md-3 my-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={strTeamBadge} />
        <Card.Body>
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>{strLeague}</Card.Text>
          <Button onClick={() => showTeam(idTeam)}>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Team Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EachTeam;
