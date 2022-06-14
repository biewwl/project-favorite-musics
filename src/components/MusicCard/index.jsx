import React, { Component } from "react";
import { connect } from "react-redux";
import { AddFavorites, RemoveFavorites } from "../../redux/actions/UserAction";
import "./styles/MusicCard.css";
import "./styles/MusicCard-mobile.css";

class MusicCard extends Component {
  render() {
    const {
      infos,
      infos: { trackName, trackNumber, previewUrl, trackId },
      favoriteSongs,
      dispatch,
    } = this.props;
    const checked = favoriteSongs.some((e) => e.trackId === trackId);
    return (
      <section className="tracks-card">
        <span className="track-number">{trackNumber}</span>
        <div className="music-area">
          <span>{trackName}</span>
          <audio src={previewUrl} controls>
            <track kind="captions" />O seu navegador não suporta o elemento{" "}
            <code>audio</code>.
          </audio>
        </div>
        <div className="favorite-area">
          {checked && (
            <i
              className="fa-solid fa-heart add"
              onClick={() => dispatch(RemoveFavorites(trackId))}
            />
          )}
          {!checked && (
            <i
              className="fa-solid fa-heart rm"
              onClick={() => dispatch(AddFavorites(infos))}
            />
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  favoriteSongs: state.user.favoriteSongs,
});

export default connect(mapStateToProps)(MusicCard);
