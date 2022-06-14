import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../../components/Header";
import "./styles/Profile.css";
import "./styles/Profile-mobile.css";

class Profile extends Component {
  render() {
    const { userName, userEmail, userImage, userDescription } = this.props;
    return (
      <>
        <Header />
        <div className="page-profile">
          <section className="card-profile">
            <img src={userImage} alt={userName} />
            <div className="user-infos">
              <p className="name-user">{userName}</p>
              <p className="email-user">{userEmail}</p>
              <p className="description-user">{userDescription}</p>
            </div>
            <Link to="/profile/edit" className="edit-profile">
              <i class="fa-solid fa-pen-to-square" />
            </Link>
          </section>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userName: state.user.name,
  userEmail: state.user.email,
  userImage: state.user.image,
  userDescription: state.user.description,
});

export default connect(mapStateToProps)(Profile);
