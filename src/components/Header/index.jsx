import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './images/logo.png' 
import './styles/Header.css';
import './styles/Header-mobile.css';

class Header extends Component {
  render() {
    const { userName, userImage } = this.props;
    return (
      <header>
        <Link to="/search">
          <span>✦ biewwl</span>
        </Link>
        <section className="right-content">
          <nav className="nav">
            <Link
              to="/search"
              className="search"
            >
              Search
            </Link>
            <Link
              to="/favorites"
              className="favorites"
            >
              Favorites
            </Link>
            <Link
              to="/profile"
              className="profile"
            >
              Profile
            </Link>
          </nav>
          <nav className="mobile-nav">
            <Link
              to="/search"
              className="search fa-solid fa-magnifying-glass"
            />
            <Link to="/favorites" className="favorites fa-solid fa-heart" />
            <Link to="/profile" className="profile">
              Profile
            </Link>
          </nav>
          <Link to="/profile" className="user-view">
            <img src={ userImage } alt="" className="header-image" />
            <span className="header-name">
              {userName}
            </span>
          </Link>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userName: state.user.name,
  userImage: state.user.image,
});

export default connect(mapStateToProps)(Header);
