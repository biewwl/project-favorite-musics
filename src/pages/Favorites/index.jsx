import React, { Component } from "react";
import Header from "../../components/Header";
import MusicCardFavorites from "../../components/MusicCardFavorites";
import { connect } from "react-redux";
import "./styles/Favorites.css";
import "./styles/Favorites-mobile.css";

class Favorites extends Component {
  render() {
    const { favoriteSongs } = this.props;
    return (
      <>
        <Header />
        <div className="page-favorites">
          <h2 className="header-favorites">My favorite musics</h2>
          <div className="favorite-musics">
            {favoriteSongs.map((e, i) => (
              <MusicCardFavorites key={i} infos={e} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  favoriteSongs: state.user.favoriteSongs,
});

export default connect(mapStateToProps)(Favorites);
