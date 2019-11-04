import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function CardBody(props) {
  return (
    <div className="col s12 m3">
      <div className="card blue-grey darken-1" onClick={() => props.handleIncrement(props.id)}>
        
        <div className="card-image img-div">
          <img className="setPos" src={props.image}></img>
        </div>
        
        <div className="card-content"> 
          <p>Click Count: {props.count}</p>
        </div>

      </div>
    </div>
  );
}

export default CardBody;
