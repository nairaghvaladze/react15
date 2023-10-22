
import React from "react";

import {Link, Outlet} from "react-router-dom";

function Layout(){
    document.body.style='background :grey;';

    
    return(
        <div  className="d-flex justyfy-content-end mt-3">
            
        <button className="btn btn-warning me-4">
        <Link to={"/registration"}>რეგისტრაცია</Link>
        </button>
        <button className="btn btn-dark">
            <Link to={"/avtorisation"}>ავტორიზაცია</Link>
        </button>
       
   
    <Outlet />
        </div>
    )
}
export default Layout;