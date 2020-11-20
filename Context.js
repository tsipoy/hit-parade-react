import React, {useState, useEffect} from 'react';
import Songs from './songsData.json'

const Context = React.createContext();

function ContextProvider({children}) {
    const [songs, setSongs] = useState(Songs);

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


    useEffect(() => {
        setSongs(Songs)
    }, [])

    return (
        <Context.Provider value={{songs, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}