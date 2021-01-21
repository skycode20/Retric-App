import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './jumbotron.css';
import JumboImage from "../../img/jumbotron.jpg";

function Jumbotron() {

   return(
      <div className="minha-div">
            <img src={JumboImage} className="jumbotronSize" alt="Retric Website" />
      </div>
   );


}

export default Jumbotron