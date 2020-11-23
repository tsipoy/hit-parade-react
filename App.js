import React, { useContext } from 'react';
import { Context } from "./Context";
import { Switch, Route, Link } from "react-router-dom";
import PopularSongs from "./PopularSongs";
import Styles from './Style';
import AddSongs from './AddSongs';
import Cart from "./Cart";

function App() {
    const { songs } = useContext(Context);
    return (
        <div>
            <header>
                <h1>Hit Parade</h1>
                <div className="header">
                    <Link to='/'>🔥 Popular Songs</Link>
                    <Link to="/style">💖 Style</Link>
                    <Link to="/add"><i className="ri-play-list-add-fill"></i> Add</Link>
                    <Link to="/cart">🛒 Cart</Link>
                </div>
            </header>
            <div>
                <Switch>
                    <Route exact path="/">
                        {songs.sort((itemA, itemB) => {
                            const voteA = itemA.upvotes - itemA.downvotes;
                            const voteB = itemB.upvotes - itemB.downvotes;
                            return voteB - voteA;
                        }).map((song) => (
                            <PopularSongs key={song.id} song={song} />
                        ))}
                    </Route>
                    <Route path="/style">
                        <Styles />
                    </Route>
                    <Route path="/add">
                        <AddSongs />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default App