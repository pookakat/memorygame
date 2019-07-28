import React, {Component} from "react";
import Memory from "./components/memory.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Modal from "./components/Modal.js";

const picsArray = ["20190330_161835_HDR.jpg", "20190410_112757_HDR.jpg", "20190518_182959.jpg", "IMG_20190724_094431.jpg", "IMG_20190703_100121.jpg", "IMG_20190714_100219.jpg", "IMG_20190714_100633.jpg", "IMG_20190726_202559.jpg", "IMG_20190716_163257.jpg", "IMG_20190722_100501.jpg", "IMG_20190724_094405.jpg", "IMG_20190726_202149.jpg"]

function App(){
  return (
  <div id="container">
    <Modal />
    <Header />
    <Memory picsArray={picsArray}/>
    <Footer />
  </div>
  )
}

export default App;
