import React from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../../pages/Loading";



// const ProtectedRoute = ({ children }) => (   
//    // <Route >
//    //    {children.props._id
//    //     ? children
//    //     : <Redirect to='/' />}
//    // </Route>
// )
//  export default ProtectedRoute;



function ProtectedRoute({ children }) {   

   function isLogged() {   

 
      console.log('here here here');
      const logged =  window.sessionStorage.getItem("logged");
      // const logged =  (children.props._id !== undefined) ? true : false;
      console.log(logged);
      console.log(children.props.user)
      console.log('-----------');

      return logged;
   }

 

   if (children.props.user === true){
      return (
         <Route >
            {isLogged() ? children : <Redirect to="/login?blabla" />}
         </Route>
      )
   
   }
   else {
      return (
         <Route >
            {Loading}
         </Route>
      )   
   }
}
 export default ProtectedRoute;