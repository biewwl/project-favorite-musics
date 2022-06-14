import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Search from "./pages/Search";
import Album from "./pages/Album";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { logged } = this.props;

    return (
      <Switch>
        <Route exact path="/">
          {logged ? <Redirect to="/search" /> : <Login />}
        </Route>
        <Route path="/search">
          {!logged ? <Redirect to="/" /> : <Search />}
        </Route>
        <Route exact path="/album/:id">
          {!logged ? <Redirect to="/" /> : (props) => <Album {...props} />}
        </Route>
        <Route exact path="/favorites">
          {!logged ? <Redirect to="/" /> : <Favorites />}
        </Route>
        <Route exact path="/profile">
          {!logged ? <Redirect to="/" /> : <Profile />}
        </Route>
        <Route exact path="/profile/edit">
          {!logged ? (
            <Redirect to="/" />
          ) : (
            (props) => <ProfileEdit {...props} />
          )}
        </Route>
        <Route path="/" component={NotFound} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

export default connect(mapStateToProps)(App);
