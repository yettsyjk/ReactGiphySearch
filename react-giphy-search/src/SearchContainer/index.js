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

//homework step 5 
//create a customized function that utilizes url for giphy search
//modify the last element of the url to inlcude q=${query}. I tried to have q=${query} within the query string of url and it didnt work properly
//the ? brings back the query parameters this url has two query parameters after the 'q=' gor query
getSelectedGifs = async (query) => {
    try{
        //promise of data
        const gettingGif = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=QjXFDP8q5BRdZP5o4pZwDjfv7g46b7ve&q=${query}`);
        //when successful parse as json
        const gifJson = await gettingGif.json();
        //console.log(gifJson) //should log data object with array with child having unique "key" property
        console.log(gifJson);
    this.setState({
      gifs: gifJson.data
    });
    //gifs: gifJson.data will be injected in line 14 this.state = gifJson.data
  } catch(err) {
    console.log(err);
    return err
    }
  }
  //render() property called getSelectedGifs set to the value {this.getSelectedGifs}
//pass method Search getSelectedGifs
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
