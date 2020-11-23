import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './Context'

function PopularSongs({ song }) {
    const { 
        toggleFavorite, 
        handleUpvotes, 
        handleDownvotes,
        carts,
        addToCarts,
        deleteItems,
    } = useContext(Context);

    function isFavorited() {
        if (song.isFavorited) {
            return <i className="ri-heart-fill fav" onClick={() => toggleFavorite(song.id)}></i>
        }
        return (
            <i className="ri-heart-line" onClick={() => toggleFavorite(song.id)}></i>
        )
    }

    function addCarts() {
        const cardId = carts.some(cart => cart.id === song.id)

        if(cardId) {
            return <i className="ri-shopping-cart-fill fav"onClick={() => deleteItems(song.id)}></i>
        } 
            return <i className="ri-shopping-cart-line" onClick={() => addToCarts(song)}></i>
        // }
    }

    return (
        <div className="wrapper">
            {isFavorited()}
            <div>
                <h3>{song.songTitle}</h3>
                <p>{song.artistName}</p>
            </div>
            <p>{song.upvotes}<i className="ri-arrow-up-line" onClick={() => handleUpvotes(song.id)}></i></p>
            <p>{song.downvotes}<i className="ri-arrow-down-line" onClick={() => handleDownvotes(song.id)}></i></p>
            {addCarts()}
            <Link to={`/song/${song.id}`}>
                <i className="ri-more-line"></i>
            </Link>
        </div>
    )

}
export default PopularSongs