import React from 'react';

function GifContainer (props) {
    //using the url from SearchContainer navigate to data object into images keyinto downsized_large object key and url key 
    return(
        props.data.map(gif => {
            return <img className="gifContainer" src={gif.images.downsized_large.url} alt={gif.title}/> 
        })
    )
}
export default GifContainer;