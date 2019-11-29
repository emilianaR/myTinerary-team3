import React, { Component } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import NavBar from "../Nav/nav";
// import { Link, Redirect } from "react-router-dom";
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

  /* valueUser(e) {
    this.setState({ user: e });
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.success)
    if (this.props.success !== prevProps.success){
        console.log(this.props.success);
        console.log(prevProps.success);
        
      this.setState({
        redirect: this.props.success
      });
    }
 }

  valuePassword(e) {
    this.setState({ password: e });
  }

  obtieneLogin(e) {
    let user = {
      email: this.state.user,
      password: this.state.password
    };
    console.log('obtieneLogin');
    this.props.login(user);
  }
  renderRedirect = () => {
    if (this.state.redirect === true) {
      console.log(this.state.redirect)
      return <Redirect to='/' />
    }
  } */

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
      </>
    );
  }
}

/* const mapStateToProps = (state) => {
  return {
    success: state.sesionReducer.success,
    token: state.sesionReducer.token
  }
};
*/

// const mapDispatchToProps = (dispatch) => ({
//   login: (user) => {
//     dispatch(GETEXIT())
//   }
// }); 

export default connect(null, {GETEXIT})(Logout);