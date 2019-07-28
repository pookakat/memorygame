import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const picsArray = ["20190330_161835_HDR.jpg", "20190410_112757_HDR.jpg", "20190518_182959.jpg", "IMG_20190724_094431.jpg", "IMG_20190703_100121.jpg", "IMG_20190714_100219.jpg", "IMG_20190714_100633.jpg", "IMG_20190726_202559.jpg", "IMG_20190716_163257.jpg", "IMG_20190722_100501.jpg", "IMG_20190724_094405.jpg", "IMG_20190726_202149.jpg"]

function shuffleArray(picsArray) {
    for (var i = picsArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}



