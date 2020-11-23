import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from './Context';

export default function DisplayStyle() {
    const { styleName} = useParams();
    const { songs } = useContext(Context);
    const songTemplate = (song) => {
        return (
            <Link to={`/song/${song.id}`} key={song.id}>
                <div>
                    <h3>{song.songTitle}</h3>
                    <p>{song.artistName}</p>
                </div>
            </Link>
        )
    }

    const filteredSong = songs.filter(style === styleName).map(songTemplate);
    
    return (
        <div>
          {filteredSong}  
        </div>
    )
}
