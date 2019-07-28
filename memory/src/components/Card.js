import React from "react";

export default function Card(props){
    return(
        <p>{props.picsArray.map(item => (
            <button key={item.toString()} className="card-size"><img src={"./images/" + item}  className="pic-size" /></button>
        ))}
        </p>
    );
}

