import React from 'react';

function GifContainer(props) {

    const gifStykes = {
        width: '37%',
        height: '45%'
    };
const gifSelections = props.gifs.map((image, i) => {
        return(
        <p key={i} gif={image}></p>
        )
    })
    return(
    <div>
        <container>
            <row>Row of Images :
        {gifSelections}        
</row>
</container>        

        </div>
    );
};
export default GifContainer;