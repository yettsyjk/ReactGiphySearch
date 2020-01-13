import React, { Component } from 'react';
import Search from '../Search';
import GifContainer from '../GifContainer';
import '../App.css';


//the giphy search app will be contained within the SearchContainer

//create a giphys property in the SearchContainer state
// and set value to an empty array
class SearchContainer extends Component {
    constructor() {
        super();
    this.state = { gifs: [] };
}

//create a customeized function that utilizes url for giphy search
//modify the last element of the url to inlcude q=${query}. I tried to have q=${query} within the quert string of url and it didnt work properly
getSelectedGifs = async (query) => {
    try{
        const gettingGif = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=QjXFDP8q5BRdZP5o4pZwDjfv7g46b7ve&q=${query}`);
        const gifJson = await gettingGif.json();
        //console.log(gifJson) should log data object with array with child having unique "key" property
        console.log(gifJson);
    this.setState({
      gifs: gifJson.data
    });
    //
  } catch(err) {
    console.log(err);
    return err
    }
  }
  //render() property called getSelectedGifs set to the value {this.getSelectedGifs}
render() {
    return (
<React.Fragment>
    <h1>Giphy Search</h1>
    <Search getQuery={this.getSelectedGifs}/>
    <GifContainer data={this.state.gifs}/>

</React.Fragment>
    )
    }
}
export default SearchContainer;
