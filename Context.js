import React, { useState, useEffect } from 'react';
import Songs from './songsData.json'

const Context = React.createContext();

function ContextProvider({ children }) {
    const [songs, setSongs] = useState(Songs);
    const [carts, setCarts] = useState([]);
    const [addToLists, setAddToLists] = useState([]);

    function toggleFavorite(id) {
        const newSongsArray = songs.map(song => {
            if (song.id === id) {
                return {
                    ...song,
                    isFavorite: !song.isFavorite,
                }
            }
            return song;
        })
        setSongs(newSongsArray)
    }

    function handleUpvotes(id) {
        const upvoted = songs.map(song => {
            if (song.id === id) {
                return {
                    ...song,
                    upvotes: song.upvotes + 1,
                }
            }
            return song;
        })
        setSongs(upvoted);
    }

    function handleDownvotes(id) {
        const downvoted = songs.map(song => {
            if (song.id === id) {
                return {
                    ...song,
                    downvotes: song.downvotes + 1,
                }
            }
            return song;
        })
        setSongs(downvoted);
    }

    function addToCarts(item) {
        setCarts(prevItems => [...prevItems, item])
    }

    function deleteItems(itemId) {
        setCarts(prevItems => prevItems.filter(item => item.id !== itemId))
    }

    function emptyCart() {
        setCarts([]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        let title = form.title.value;
        let artist  = form.artist.value;
        let lyrics = form.lyrics.value;
        let style = form.style.value;
        let  price = form. price.value;

        console.log(lyrics);
        console.log(style)

        const newLists = {
            songTitle: title,
            id: new Date(),
            artistName: artist,
            id: new Date(),
            lyrics: lyrics,
            style: style,
            isFavorite: false ,
            upvotes: 0,
            downvotes: 0,
            price: price,
        }
        // songs.push(newLists);
        form.reset()
        setSongs([...songs, newLists])    
    }

    useEffect(() => {
        setSongs(Songs);
    }, [])

    return (
        <Context.Provider value={{
            songs,
            toggleFavorite,
            handleUpvotes,
            handleDownvotes,
            carts,
            addToCarts,
            deleteItems,
            emptyCart,
            handleSubmit,
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }