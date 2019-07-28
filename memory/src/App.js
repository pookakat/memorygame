import React, {Component} from "react";
import Memory from "./components/memory.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Modal from "./components/Modal.js";

var picsArray = [];

export function newArray(){
  picsArray = ["20190330_161835_HDR.jpg", "20190410_112757_HDR.jpg", "20190518_182959.jpg", "IMG_20190724_094431.jpg", "IMG_20190703_100121.jpg", "IMG_20190714_100219.jpg", "IMG_20190714_100633.jpg", "IMG_20190726_202559.jpg", "IMG_20190716_163257.jpg", "IMG_20190722_100501.jpg", "IMG_20190724_094405.jpg", "IMG_20190726_202149.jpg"]
  for (var i = picsArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = picsArray[i];
    picsArray[i] = picsArray[j];
    picsArray[j] = temp;
  };
};

newArray();
 
function App(){
  return (
  <div id="container">
    <Modal />
    <Header />
    <Memory picsArray={picsArray} onChange="this.forceUpdate" />
    <Footer />
  </div>
  )
}

export default App;
