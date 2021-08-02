import { Component } from "react";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";

class Weather extends Component{
    constructor(props){
        super(props);

        this.state={
            place: "",
            temperature: "",
            weather: "",
        };

        this.setPlace = this.setPlace.bind(this);
        this.getWeatherDetails = this.getWeatherDetails.bind(this);
    }

    setPlace(eventKey){
        console.log("updating place")
        this.setState({
            place:eventKey
        }, ()=> this.getWeatherDetails());
    }

    getWeatherDetails(){
        console.log("getting weather for:" + this.state.place)
        if(this.state.place !== ""){
            const baseURL = "http://api.weatherapi.com/v1/current.json"
            const apiKey = "your-api-key"
            const Location = this.state.place
            fetch(baseURL + "?key=" + apiKey + "&q=" + Location)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result !== null){
                        this.setState({
                            place: result.location.name,
                            temperature: result.current.temp_c,
                            weather: result.current.condition.text
                        });
                    }
                }
            )
        }
    }

    render(){
        return(<Container>
            <h1>Weather</h1>
            <DropdownButton title="Location" onSelect={(eventKey) => this.setPlace(eventKey)}>
                <Dropdown.Item eventKey="London">London</Dropdown.Item>
            </DropdownButton>
            <p>{this.state.place}</p>
            <p>{this.state.weather}</p>
            <p>{this.state.temperature}</p>
        </Container>);
    };
}

export default Weather;