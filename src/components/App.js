import React, {Component} from "react";
import Nav from "./Nav";
import SearchArea from "./SearchArea";


class App extends Component {


    
    constructor() {
        super()
        this.state = {
            movies: [],
            searchTerm: '',
        }

        this.apiKey = process.env.REACT_APP_API_KEY
    }


    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
        // fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.apiKey}&query=${this.state.searchTerm}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({movies: [...data.results]})
        })
    }


    handleChange = (e) => {
        // e.preventDefault();
        this.setState({ searchTerm: e.target.value })
    }


    render() {
        return(
            <div>
                {process.env.REACT_APP_API_KEY}
                <Nav/>
                <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            </div>
        )
    }
}

export default App;
