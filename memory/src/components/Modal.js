import React from 'react';

export default function Modal(props){
    return (
    <div id="myModal" className="modal">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header purple-txt">
                    <h1>The Faces of Daisy Memory Game</h1>
                </div>
                <div className="modal-body purple-bkg white-txt">
                    <p>In this game, click the pictures to select each new picture of Daisy. Try not to click the same picture twice. Click on all 12 unique pictures, and you win!</p>
                </div>
                <div className="modal-footer">
                    <button className="modal-button purple-bkg white-txt" type="button" onClick={hideModal}>Click to Begin</button>
                </div>
            </div>
        </div>
    </div>
    )
}

function hideModal(){
    document.getElementById("myModal").style.display="none";
}