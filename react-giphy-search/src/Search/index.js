import React, { Component } from 'react';

//create a new component called Search requires a render() method
class Search extends Component {
    //set up initial state with constructor and super() but dont add props within that state just yet
    constructor() {
        super();
//we are passing down state down as props, returning arrays of elements
    this.state = { 
        keyword: '',
        gifs: [],
        query: '',
        value: '',
    };
    //maps onClick function needs to bind this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
//customize method called getGif set the state to this.setState() passing object to override state with {query: e.target.value} not currentTarget
//trigger function getGif by onChange maps to this.getGif 
getGif = (e) => {
    this.setState({
        query: e.target.value
        //tried to use instead of {query: e.target.value} but didnt work not sure why: this.setState(prevState => {return {query: ''}})
    });
}
//reduce to one handleChange method that could consume as many input fields with this single method
handleChange = (e) => {
    this.setState({ 
        //boorowed from stackoverflow for handleChange method [e.target.name]: e.target.value
        [e.target.name]: e.target.value
    });
}
//create method handleSubmit waiting for event trigger getGif
//e.preventDefault() method was used when form onSubmit was utilized byutr returned error. I need to understand if it requires a method = 'POST'
handleSubmit = (e) => {
    // alert('A phrase was submitted: ' + this.state.query);
    e.preventDefault();
    //getQuery() method is required for 
    this.props.getQuery(this.state.query);
    // console.log(this.state.query);
}
//the componentDidMount lifecycle method is optional, instance is created and inserted into thew DOM and results in logged 
componentDidMount() {
    console.log('componentDidMount');
  }
//have Search component render a search form: single input and submit button
//launch function on form submit
//render() with stateless functional component that displays
//clear input onClick
//render is the only required method in a class component
render() {
    return (
<div className="searchContainer">
    <h3 claasName="title">Render Giphy</h3>
    <form>
<label>Type in a search phrase :
    <textarea type="text" name="query" placeholder="search for gifs..." onChange={this.getGif} />
    </label>
    <button onClick={this.handleSubmit}><strong>Submit</strong></button>
    </form>
</div>
     );
    }
}
export default Search;
