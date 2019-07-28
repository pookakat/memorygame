import React from 'react';
import Card from './Card';

function Memory(props){
    return(
        <div id="pic-container">
            <Card picsArray={props.picsArray} />
        </div>
    );
}
  
  export default Memory;
  