import React, {useState, useEffect} from 'react';
import Songs from './songsData.json'

const Context = React.createContext();

function ContextProvider({children}) {
    const [songs, setSongs] = useState(Songs);
    const [carts, setCarts] = useState([]);

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

    useEffect(() => {
        setSongs(Songs)
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
            }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}