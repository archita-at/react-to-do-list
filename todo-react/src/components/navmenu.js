import { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Todo from "./todo.js";

class Navmenu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedApp : ""
        };
    }

    render(){
        const selectedApp = this.state.selectedApp;
        let app;
        if(selectedApp === "todo"){
            app = <Todo />;
        }
        return(
            <div>
                <Navbar onSelect={(key) => this.setState({selectedApp: key})}>
                <Nav.Link eventKey="todo">To-Do App</Nav.Link>
                <Nav.Link eventKey="calculator">Calculator</Nav.Link>
                </Navbar>
                {app}
            </div>
        );
    }
}

export default Navmenu;