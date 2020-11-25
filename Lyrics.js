import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from './Context';

export default function Lyrics() {
    const { songId } = useParams();
    const { songs } = useContext(Context);
    console.log(songs);

    const songLyrics = songs.find(song => song.id === Number(songId));
    console.log(songLyrics?.songTitle)
    return (
        <div className="lyricsWrapper">
            <h2>{songLyrics.artistName}: {songLyrics.songTitle}</h2>
            <div className="lyrics">
                <h3>Lyrics</h3>
                <pre>{songLyrics.lyrics}</pre>
            </div>
        </div>
    )
}
