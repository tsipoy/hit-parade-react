import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from './Context';

export default function DisplayStyle() {
    const { styleName } = useParams();
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

    function showSongsFilteredByStyle() {
		const filteredSongs = songs
			.filter(song => song.style === styleName)
			.map(songTemplate);
		if (filteredSongs.length === 0) {
			return <p>No results.</p>;
		}
		return filteredSongs;
	}

	return (
		<div>
			<h1>Style</h1>
			<div>{showSongsFilteredByStyle()}</div>
		</div>
	);
}
