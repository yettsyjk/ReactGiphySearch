import React, { Component } from 'react';


//lift up your state

//create a giphys property in the SearchContainer state
// and set value to an empty array
class SearchContainer extends Component {
    constructor() {
        super();
    this.state = { term: ''};
}
render() {
    return (
<div className="SearchContainer">
    <h1>Connecting SearchContainer</h1>
</div>
    );
}
}


export default SearchContainer;
