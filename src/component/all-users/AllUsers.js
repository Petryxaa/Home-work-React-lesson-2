import React, { Component } from "react";

import User from "../user/User";
import UserPost from "../user/UserPost";

import UserService from "../../services/User/UserService";
import UserPostService from "../../services/Post/UserPostServise";
import "./StyleUsers.css";

export default class AllUsers extends Component {
  
  userService = new UserService(); ///створення eкземпляру сервісу
  userPostServise = new UserPostService();

  state = { users: [], userPost: [], chosenOne: null, postChosen: null };

  constructor() {
    console.log("cons");
    super();
  }

  onSelectUser = (id) => {
    let { users } = this.state;
    let find = users.find((value) => value.id === id); ///-->пошук по користувачів по ІD
    this.setState({ chosenOne: find }); ///
  };

  onSelectUserPost = (Id) => {
    let { userPost } = this.state;
    let faund = userPost.find((value) => value.id === Id);
    this.setState({ chosenOne: faund });
  };

  componentDidMount() {
    this.userService
      .getAllUsers()
      .then((value) => this.setState({ users: value }));

    this.userPostServise
      .getAllUserPostServise()
      .then((value) => this.setState({ userPost: value }));
  }

  render() {
    let { users, chosenOne, userPost } = this.state;
    return (
      <div>
        <div>
          {users.map((user) => (
            <User item={user} key={user.id} onSelectUser={this.onSelectUser} />
          ))}
          {chosenOne && (
            <div class="chosenOne">
              <h1>
                {chosenOne.id}-{chosenOne.name}-{chosenOne.email}
                {chosenOne.title}
              </h1>
            </div>
          )}
          {userPost.map((userPost) => (
            <UserPost
              item={userPost}
              key={userPost.id}
              onSelectUserPost={this.onSelectUserPost}
            />
          ))}
        </div>
        <div></div>
      </div>
    );
  }
}
