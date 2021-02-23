import React, { useState } from "react";
import "./test.css";
import PurpleButton from "../CustomJS/PurpleButton.js";
import Group2 from "../images/Group 2.jpg";

import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

function Test(props) {
    const [initialData, setinitialData] = useState();

    /*
  <Route exact path="/">
    {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
  </Route>
  */
    return (
        <div>
          
            <Link to={`/${props.id}`}>
                <div
                    className="images_row"
                    onClick={() => {
                        console.log(props.title);
                    }}
                >
                    <div>
                        <img
                            src={props.image}
                            className="cloth_image"
                            alt=""
                        ></img>
                        <h1>hbhhhh</h1>
                        <PurpleButton line1={props.title} line2={props.price} />
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Test;

class MyComponent extends React.Component {
    state = {
        redirect: false,
    };
    setRedirect = () => {
        this.setState({
            redirect: true,
        });
    };
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/target" />;
        }
    };
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <button onClick={this.setRedirect}>Redirect</button>
            </div>
        );
    }
}
