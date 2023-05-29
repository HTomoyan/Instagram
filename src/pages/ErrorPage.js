import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage(){
    const navigate=useNavigate()
    return(
        <div className="Error">
            <h1>Error 404</h1>
            <button onClick={()=> navigate('/')}>Home</button>
        </div>
    )
}
export default ErrorPage