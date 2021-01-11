import React from "react";

function Categories(props) {
  return (
    <div class="col-md-3">
      <div class="list-group">

                <button type="button" id="dallas" class="city list-group-item list-group-item-action">Technology</button>

                <button type="button" id="chicago" class="city list-group-item list-group-item-action">Music</button>

                <button type="button" id="new-york" class="city list-group-item list-group-item-action">Sports</button>

                <button type="button" id="miami" class="city list-group-item list-group-item-action">Culinary</button>

                <button type="button" id="san-francisco" class="city list-group-item list-group-item-action">Exercise</button>

                <button type="button" id="seattle" class="city list-group-item list-group-item-action">Home</button>

                <button type="button" id="atlanta" class="city list-group-item list-group-item-action">Art</button>


      </div>
    </div>
  );
}

export default Categories;