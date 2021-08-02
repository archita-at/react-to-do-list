import { Component } from "react";

import { Container, InputGroup, FormControl, Button, ListGroup } from "react-bootstrap";

class Todo extends Component{
    constructor(props){
        super(props);

        this.state={
            userInput : "",
            list : []
        };
    }

    updateInput(value){
        this.setState({
            userInput:value
        });
    }

    addItem(){
        if(this.state.userInput !== ""){
            const userInput = {
                id: Math.random(),
                value: this.state.userInput
            };
            console.log(userInput);
            const list = [...this.state.list, userInput];
            this.setState({
                list: list,
                userInput: ""
            });
        }
    }

    deleteItem(itemId){
        const list = this.state.list.filter((item) => item.id !== itemId);
        console.log(list);
        this.setState({
            list:list,
        });
    }

    render(){
        return(<Container>
            <h1>TO-DO LIST</h1>
            <InputGroup className="mb-3">
                <FormControl 
                placeholder="Add to-do"
                value={this.state.userInput}
                onChange={item => this.updateInput(item.target.value)}/>
                <Button onClick={() => this.addItem()}>Add Todo</Button>
            </InputGroup>
            <ListGroup>
                {this.state.list.map(item => {return(
                    <ListGroup.Item key={item.id}>
                        {item.value}
                        <Button onClick={() => this.deleteItem(item.id)}>Remove</Button>
                    </ListGroup.Item>
                )})}
            </ListGroup>
        </Container>   
        );
    };
}

export default Todo;