import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import searchAlbumsAPI from "../../services/searchAlbumsAPI";
import Loading from "../../components/Loading";
import "./styles/Search.css";
import "./styles/Search-mobile.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchName: "",
      loading: false,
      artist: "",
      albums: [],
    };
  }

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  searchClick = async () => {
    const { searchName } = this.state;
    this.setState({
      loading: true,
    });
    const obj = await searchAlbumsAPI(searchName);
    this.setState({ loading: false });
    if (obj[0] !== undefined) {
      this.setState({
        artist: searchName,
        albums: obj,
      });
    }
  };

  render() {
    const { searchName, loading, albums, artist } = this.state;
    const { onInputChange, searchClick } = this;
    return (
      <>
        <Header />
        <div className="page-search">
          <form action="get">
            <input
              placeholder="Artist, band..."
              type="text"
              name="searchName"
              value={searchName}
              onChange={onInputChange}
              onKeyDown={(e) => {
                  if (e.key === "Enter") {
                  e.preventDefault();
                searchClick();
              };
              }}
            />
            <button
              type="button"
              disabled={searchName.length < 2}
              onClick={searchClick}
            >
              Search
            </button>
          </form>
          {loading && <Loading />}
          {albums.length > 0 && (
            <div className="result-title">
              <h2>{`Results of: "${artist}"`}</h2>
            </div>
          )}
          {albums.length > 0 ? (
            <div className="albums">
              {albums.map((e) => {
                const {
                  artistName,
                  collectionId,
                  collectionName,
                  artworkUrl100,
                } = e;
                return (
                  <section key={collectionId}>
                    <img src={artworkUrl100} alt={collectionName} />
                    <div className="infos-album">
                      <h4>{collectionName}</h4>
                      <span>{artistName}</span>
                      <Link
                        className="go-to-album"
                        to={`album/${collectionId}`}
                      >
                        Ir para o Álbum
                      </Link>
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <span className="feedback-search">Start a new search</span>
          )}
        </div>
      </>
    );
  }
}

export default Search;
