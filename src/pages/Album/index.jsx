import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import getMusics from '../../services/musicsAPI';
import MusicCard from '../../components/MusicCard';
import './styles/Album.css';
import './styles/Album-mobile.css';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      artist: '',
      album: '',
      artworkUrl100: '',
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history,
    } = this.props;
    const musics = await getMusics(id);
    if (musics === 'error') history.push('/search');
    else {
      this.setState({
        musics: musics.filter((e) => e.kind !== undefined),
        artist: musics[0].artistName,
        album: musics[0].collectionName,
        artworkUrl100: musics[0].artworkUrl100,
      });
    }
  }

  render() {
    const { artist, album, artworkUrl100 } = this.state;
    const { musics } = this.state;
    return (
      <>
        <Header />
        <div className="album">
          <div className="header-album">
            <h2>{artist}</h2>
            <h3>{album}</h3>
          </div>
          <section className="musics">
            <div className="image-album">
              <img src={ artworkUrl100 } alt="" />
            </div>
            <div className="tracks">
              {musics.map((e, i) => (
                <MusicCard key={ i } infos={ e } />
              ))}
            </div>
          </section>
        </div>
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default Album;
