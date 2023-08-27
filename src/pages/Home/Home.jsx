import React from "react";
import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  const history = useHistory();
  function startRegister() {
    history.push("/authenticate");
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to  IMCCAudioClub!" 
      // icon="logo"
      >
        <p className={styles.text}>
        IMCCAudioClub is a live podcast app <br /> that lets you stream and record your show. 
       Its features make it easy to do a live podcast.
        </p>
        <div>
          <Button onClick={startRegister} text="Join Now" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>{/* Have an invite text? */}</span>
        </div>
      </Card>
    </div>
  );
};

export default Home;
