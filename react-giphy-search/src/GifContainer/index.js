import React from 'react';
//function component that returns an array
//in homework step 6 this should be Results component
function GifContainer (props) {
    //using the url from SearchContainer navigate to data object into images key into downsized_large object key and url key attemtped to use {gif.title} but didnt see any change
    //tried the key={i} but didnt get error for key id
    return(
        props.data.map(gif => {
            return <img className="gifContainer" src={gif.images.downsized_large.url} alt="title"/> 
        })
    )
}
export default GifContainer;