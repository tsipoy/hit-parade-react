import React, { useContext, useState } from 'react';
import { Context } from './Context'

function PopularSongs({ song }) {
    const { toggleFavorite,  handleUpvotes, handleDownvotes } = useContext(Context);
    // const [upvote, setUpvotes] = useState(song.upvotes);
    // const [downvote, setDownvotes] = useState(song.downvotes);

    function isFavorited() {
        if (song.isFavorite) {
            return <i className="ri-heart-fill fav" onClick={() => toggleFavorite(song.id)}></i>
        }
        return (
            <i className="ri-heart-line" onClick={() => toggleFavorite(song.id)}></i>
        )
    }


    // function isUpvoted() {
    //     if(song.upvotes) {
    //         return <i className="ri-arrow-up-line" onClick={() => setUpvotes(upvote + 1)}></i>    
    //     }
    // }


    return (
        <div className="wrapper">
            {isFavorited()}
            <div>
                <h3>{song.songTitle}</h3>
                <p>{song.artistName}</p>
            </div>
            <p>{song.upvotes}<i className="ri-arrow-up-line" onClick={() => handleUpvotes(song.id)}></i></p>
            <p>{song.downvotes}<i className="ri-arrow-down-line" onClick={() => handleDownvotes(downvote + 1)}></i></p>
            <i className="ri-shopping-cart-line"></i>
            <i className="ri-more-line"></i>
        </div>
    )

}
export default PopularSongs