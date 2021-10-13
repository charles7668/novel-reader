// import { button } from "react-bootstrap";
import React from "react";
import {Button} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import "./NavigationBar.css";

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {redirect: false};
        this.changePage = this.changePage.bind(this);
    }

    changePage() {
        this.setState({redirect: true});
    }

    render() {
        const navigator = (
            <div id="navigation_bar">
                <div id='slide_nav'>
                    <p id="slide_nav_button"
                       onClick={() => this.props.sidePanelVisibleChange(!this.props.sidePanelVisible)}>☰</p>
                </div>
                {/*<Button onClick={() => this.props.visibleChange(true)}>☰</Button>*/}
                <input placeholder="input search text"></input>
                <Button onClick={this.changePage}>test</Button>
            </div>
        );
        const redirect = <Redirect to={this.props.location}></Redirect>;
        return this.state.redirect ? redirect : navigator;
    }
}

export default NavigationBar;
