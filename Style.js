import React, { useContext } from 'react';
import {Context} from "./Context"

function Styles() {
    const {songs} = useContext(Context);

    return(
        <div className="style">
            <button><i className="ri-headphone-fill"></i>Slow</button>
            <button><i className="ri-headphone-fill"></i>Folk</button>
            <button><i className="ri-headphone-fill"></i>Country</button>
            <button><i className="ri-headphone-fill"></i>Rock</button>
            <button><i className="ri-headphone-fill"></i>Salegy</button>
        </div>
    )
}
export default Styles