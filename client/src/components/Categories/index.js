import React from "react";

function Categories(props) {
  return (
    <div className="col-md-3">
      <div className="list-group">

                <button type="button" id="Technology" className="list-group-item list-group-item-action">Technology</button>

                <button type="button" id="Music" className="list-group-item list-group-item-action">Music</button>

                <button type="button" id="Sports" className="list-group-item list-group-item-action">Sports</button>

                <button type="button" id="Culinary" className="list-group-item list-group-item-action">Culinary</button>

                <button type="button" id="Exercise" className="list-group-item list-group-item-action">Exercise</button>

                <button type="button" id="Home" className="list-group-item list-group-item-action">Home</button>

                <button type="button" id="Art" className="list-group-item list-group-item-action">Art</button>


      </div>
    </div>
  );
}

export default Categories;