import React, { useContext } from 'react';
import {Context} from "./Context"

export default function CartItems({ song }) {
    const { deleteItems } = useContext(Context);
    return (
        <div className="wrapper">
            <i className="ri-delete-bin-5-line" onClick={() => deleteItems(song.id)}></i>
            <div>
                <h3>{song.songTitle}</h3>
                <p>{song.artistName}</p>
            </div>
            <p>Price: {song.price}</p>
        </div>
    )
}
