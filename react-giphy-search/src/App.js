import React, { Component } from 'react';
import SearchContainer from './SearchContainer';
import Search from './Search';
import GifContainer from './GifContainer';



class App extends Component {
  constructor() {
    super();
    this.state = {
      //empty array
      gifs: []
  };
}
  getGifs = async (term) => {
    try{
    const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=QjXFDP8q5BRdZP5o4pZwDjfv7g46b7ve&q`);
    const parsedResponse = await Response.json()
    this.setState({
      gifs: parsedResponse.gif
    })
  } catch(err) {
    return err
    }
  }
  componentDidMount() {
    this.getGifs()
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="searchContainer">
        <SearchContainer />
        </div>        
        <div className="SearchingFor">
        <Search />
        </div>
        <div className="gifContainer">
          <GifContainer gifs={this.state.gifs}/>
        </div>

      </header>
    </div>
  );
}
}

export default App;
