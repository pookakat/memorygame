import React from "react";
import {newArray} from "../App";

export default function Card(props){
    return(
        <p>{props.picsArray.map(item => (
            <button key={item.toString()} onClick={newArray()} className="card-size"><img src={"./images/" + item} alt="Daisy" className="pic-size" /></button>
        ))}
        </p>
    );
}

