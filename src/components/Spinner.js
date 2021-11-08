import { Component } from "react";
import spinner from "./loding.gif"

class Spinner extends Component{
    render(){
        return(
            <div className="text-center">
                <img src={spinner} alt="loding"/>
            </div>
        );
    }
}
export default Spinner;