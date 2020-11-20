import React, { useContext } from 'react';
import { Context } from './Context'

function PopularSongs({ song }) {
    const { toggleFavorite } = useContext(Context);

    function isFavorited() {
        if (song.isFavorite) {
            return <i className="ri-heart-fill fav" onClick={() => toggleFavorite(song.id)}></i>
        }
        return (
            <i className="ri-heart-line" onClick={() => toggleFavorite(song.id)}></i>
        )
    }



    return (
        <div className="wrapper">
            {isFavorited()}
            <div>
                <h3>{song.songTitle}</h3>
                <p>{song.artistName}</p>
            </div>
            <p>{song.upvotes}<i className="ri-arrow-up-line"></i></p>
            <p>{song.downvotes}<i className="ri-arrow-down-line"></i></p>
            <i className="ri-shopping-cart-line"></i>
            <i className="ri-more-line"></i>
        </div>
    )

}
export default PopularSongs