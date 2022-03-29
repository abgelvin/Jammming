import React from "react"
import TrackList 
import 'Playlist.css'

export class Playlist extends React.Component {
    render(
        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            // <!-- Add a TrackList component -->
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}