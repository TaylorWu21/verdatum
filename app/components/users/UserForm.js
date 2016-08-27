import React from 'react';
import $ from 'jquery';


class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
  }

  addUser(e) {
    e.preventDefault();
    let story = this.refs.story;
    let name = this.refs.name;
    let age = this.refs.age;
    let gender = this.refs.gender;
    let like = false;
    $.ajax({
      url: '/users',
      type: 'POST',
      dataType: 'JSON',
      data: { name: name.value, story: story.value, age: age.value, gender: gender.value, like: like }
    }).done( user => {
      this.props.addUser(user);
      name.value = null;
      story.value = null;
      gender.value = null;
      age.value = null;
    }).fail( () => {

    })
  }

  render() {
    return (
      <div className="center container">
        <form ref="form">
          <input placeholder="name" ref="name" />
          <input placeholder="age" ref="age" />
          <input placeholder="gender" ref="gender" />
          <input placeholder="story" ref="story" />
        </form>
        <button className="btn" onClick={this.addUser}>Submit</button>
      </div>
    );
  }
}

export default UserForm;
