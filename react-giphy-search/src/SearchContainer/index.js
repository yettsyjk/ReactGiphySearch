import React, { Component } from 'react';
import Search from '../Search';
import GifContainer from '../GifContainer';
import '../App.css';


//lift up your state

//create a giphys property in the SearchContainer state
// and set value to an empty array
class SearchContainer extends Component {
    constructor() {
        super();
    this.state = { gifs: [] };
}
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
render() {
    return (
<React.Fragment>
    <h1>Connecting SearchContainer</h1>
    <Search getQuery={this.getSelectedGifs}/>
    <GifContainer data={this.state.gifs}/>

</React.Fragment>
    )
    }
}
export default SearchContainer;
