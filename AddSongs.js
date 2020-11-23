import React, {useContext} from 'react';
import {Context} from './Context'

function AddSongs() {
    const {handleSubmit} = useContext(Context);

    // const lists = addToLists.map(list =>
        
    // )

    return (
        // <div>{lists}</div>  
        <form onSubmit={handleSubmit}>
            <label>
                <input placeholder="Title" name="title" />
            </label>
            <label>
                <input placeholder="Artist" name="artist" />
            </label>
            <label>
                <input placeholder="Price" name="price" />
            </label>
            <label>
                <select placeholder="Style" name="style">
                    <option  value="salegy">Salegy</option>
                    <option  value="rock">Rock</option>
                    <option  value="folk">Folk</option>
                    <option  value="country">Country</option>
                    <option  value="slow">Slow</option>
                </select>
            </label>
            <label>
                <textarea placeholder="Lyrics" name="lyrics" rows="10"></textarea>
            </label>
            <button >ADD</button>
        </form>  
    )
}
export default AddSongs