import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import "./styles/ProfileEdit.css";
import "./styles/ProfileEdit-mobile.css";
import { UserProfile } from "../../redux/actions/UserAction";

class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      description: "",
      image: "",
    };
  }

  componentDidMount() {
    const { userName, userEmail, userImage, userDescription } = this.props;
    this.setState({
      name: userName,
      email: userEmail,
      description: userDescription,
      image: userImage,
    });
  }

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  validateEmail = (email) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email); // https://www.w3resource.com/javascript/form/email-validation.php#:~:text=JavaScript%20code%20to%20validate%20an%20email%20id

  disabledSave = () => {
    const { name, email, description, image } = this.state;
    const arrayOfInputsValue = [name, email, description, image];
    const notEmpty = arrayOfInputsValue.every((e) => e !== "");
    const validFormat = this.validateEmail(email);
    const allOk = validFormat && notEmpty;
    return !allOk;
  };

  render() {
    const { name, email, description, image } = this.state;
    const { onInputChange, disabledSave, state } = this;
    const { dispatch, history } = this.props;
    return (
      <>
        <Header />
        <div className="page-profile-edit">
          <form action="get">
            <label htmlFor="edit-input-name">
              Name:
              <input
                type="text"
                className="edit-input-name"
                onChange={onInputChange}
                name="name"
                value={name}
              />
            </label>
            <label htmlFor="edit-input-email">
              Email:
              <input
                type="email"
                className="edit-input-email"
                onChange={onInputChange}
                name="email"
                value={email}
              />
            </label>
            <label htmlFor="edit-input-description">
              Description:
              <input
                type="text"
                className="edit-input-description"
                onChange={onInputChange}
                name="description"
                value={description}
              />
            </label>
            <label htmlFor="edit-input-image">
              Image URL:
              <input
                type="url"
                className="edit-input-image"
                onChange={onInputChange}
                name="image"
                value={image}
              />
            </label>
            <button
              type="button"
              disabled={disabledSave()}
              onClick={() => {
                dispatch(UserProfile(state));
                history.push("/profile");
              }}
            >
              Save
            </button>
          </form>
          <section className="card-profile">
            <img src={image} alt={name} />
            <div className="user-infos">
              <p className="name-user">{name}</p>
              <p className="email-user">{email}</p>
              <p className="description-user">{description}</p>
            </div>
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

export default connect(mapStateToProps)(ProfileEdit);
