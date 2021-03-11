import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TeamDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import { faPenNib,faFutbol,faFlag,faFemale,faMale} from "@fortawesome/free-solid-svg-icons";

const TeamDetails = () => {
  const { id } = useParams();
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, []);
  console.log(team);
  const {
    strAlternate,
    strTeamBadge,
    intFormedYear,
    strSport,
    strCountry,
    strGender,
    strTeamBanner,
    strDescriptionEN,
    strTeamFanart1,
  } = team;

  // conditional rendering part. unfortunately there is no female data in the api I used.
  // So I used if else and in the else part I showed male data. If there was any data regarding female data then
  // a fan art would be visible here

  const gender = strGender;
  const banner = strTeamBanner;
  const banner2 = strTeamFanart1;
  let male;
  let female;
  let showGender;
  let teamBanner;
  if (gender === "Female") {
    female = gender;
    showGender = <p><FontAwesomeIcon icon={faFemale}></FontAwesomeIcon> Gender :{female}</p>;
    teamBanner = <img src={banner2} alt="" />;
  } else {
    male = gender;
    showGender = <p><FontAwesomeIcon icon={faMale}></FontAwesomeIcon>Gender : {male}</p>;
    teamBanner = <img src={banner} alt="" />;
  }

  return (
    <div>
      {
        <div className ="text-white">
          <div className="container-fluid details-div">
            <div className="image-div img-fluid"></div>
            <div className="team-badge">
              <img className="img-fluid" src={strTeamBadge} />
            </div>
          </div>
          <div className="team-details container d-flex ">
            <div>
              <h4 className="text-center">{strAlternate}</h4>
              <p><FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon> Founded : {intFormedYear}</p>
              <p><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> Sport Type : {strSport} </p>
              <p><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Country : {strCountry}</p>
              {/* <p>Gender : {strGender}</p> */}
               {showGender}
            </div>
            <div className="img-fluid banner">
              {/* <img src={strTeamBanner} alt="" /> */}
              {teamBanner}
            </div>
          </div>
          <div className="description container mt-5">
            <p>{strDescriptionEN}</p>
          </div>
          <div className="social-media">
            {/* <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> */}
            {/* icons not working */}
          </div>
        </div>
      }
    </div>
  );
};

export default TeamDetails;
