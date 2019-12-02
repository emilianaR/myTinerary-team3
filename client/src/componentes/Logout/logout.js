import React, { Component } from "react";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import NavBar from "../Nav/nav";
import { Link } from "react-router-dom";
// import "./login.css";
import { GETEXIT } from '../../store/actions/sesionActions';
import { connect } from "react-redux";

class Logout extends Component {
  state = {
    user: "",
    password: "",
    checkRemember: false,
    redirect: false
  };

   componentDidMount() {
    this.props.GETEXIT()
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="containerItinerary" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3 className="row justify-content-center">Logout</h3>
          <p> gracias por navegar por myTinerary</p>
        </div>

        <div className="btn w-50 m-auto d-block">
          <Link to="/">
            <Button alt="button2" > Volver a Home </Button>
          </Link>
        </div>

      </>
    );
  }
}

export default connect(null, { GETEXIT })(Logout);