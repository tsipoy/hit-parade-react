import React from 'react';

function AddSongs() {
    return (
        <form>
            <label>
                <input placeholder="Title" />
            </label>
            <label>
                <input placeholder="Artist" />
            </label>
            <label>
                <input placeholder="Price" />
            </label>
            <label>
                <select placeholder="Style">
                    <option value="salegy">Salegy</option>
                    <option value="rock">Rock</option>
                    <option value="folk">Folk</option>
                    <option value="country">Country</option>
                    <option value="slow">Slow</option>
                </select>
            </label>
            <label>
                <textarea placeholder="Lyrics"></textarea>
            </label>
            <button>ADD</button>
        </form>
    )
}
export default AddSongs