import React from 'react';
import $ from 'jquery';
import User from './User';
import UserForm from './UserForm';

class Users extends React.Component {
  constructor(props){
    super(props);
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.state = { users: [] }
  }

  componentWillMount() {
    $.ajax({
      url: '/users',
      type: 'GET',
      dataType: 'JSON'
    }).done( users => {
      this.setState({ users });
    });
  }

  deleteUser(id){
    this.setState({ users: this.state.users.filter( user => user._id !== id ) });
  }

  updateUser(id, name, story) {
    let users = this.state.users.map( user => {
      if (user._id === id) {
        return {
          ...user,
          story, name
        }
      }

      return user;
    });

    this.setState({ users });
  }

  addUser(user){
    this.setState({ users: [...this.state.users, user] });
  }


  render() {
    let users = this.state.users.map( user => {
      return(
        <User
          key={user._id}
          {...user}
          deleteUser={this.deleteUser}
          updateUser={this.updateUser}
        />
      );
    });
    return(
      <div>
        <UserForm addUser={this.addUser} />
        <div className="row">
          { users }
        </div>
      </div>
    );
  }
}

export default Users;