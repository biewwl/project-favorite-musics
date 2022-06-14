import React, { Component } from "react";
import { RemoveFavorites } from "../../redux/actions/UserAction";
import { connect } from "react-redux";
import './styles/MusicCardFavorites.css'
import './styles/MusicCardFavorites-mobile.css'

class MusicCardFavorites extends Component {
  render() {
    const {
      dispatch,
      infos: {
        trackName,
        previewUrl,
        artworkUrl100,
        artistName,
        collectionName,
        trackId,
      },
    } = this.props;
    return (
      <section className="tracks-card">
        <div className="music-area">
          <div className="album-info">
            <img src={artworkUrl100} alt="" className="image-favorite" />
            <div className="name-music-info">
              <span className="favorite-track-name">{trackName}</span>
              <span className="favorite-artist-name">{artistName}</span>
              <span className="favorite-album-name">{collectionName}</span>
            </div>
          </div>
          <audio src={previewUrl} controls>
            <track kind="captions" />O seu navegador não suporta o elemento{" "}
            <code>audio</code>.
          </audio>
        </div>
        <div className="favorite-area">
          <i
            className="fa-solid fa-heart add"
            onClick={() => dispatch(RemoveFavorites(trackId))}
          />
        </div>
      </section>
    );
  }
}

export default connect()(MusicCardFavorites);
