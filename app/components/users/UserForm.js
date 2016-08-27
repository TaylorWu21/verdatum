import React from 'react';
import $ from 'jquery';

class UserForm extends React.component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
  }

  addUser(e) {
    e.preventDefault();
    let story = this.ref.story;
    let name = this.refs.name;
    let age = this.refs.age;
    let gender = this.refs.gender;
    let like = this.refs.like;

    $.ajax({
      url: '/users',
      type: 'POST',
      dataType: 'JSON',
      data: { name: name.value, story: story.value, age: age.value, gender: gender.value, like: like.value }
    }).done( user => {
      this.props.addUser(user);
      name.value = null;
      like.value = null;
    })
  }

  render() {
    return (
      <div className="center">
        <form onSubmit={this.addUser} >
          <input placeholder="name" ref="name" />
          <input placeholder="age" ref="age" />
            <select ref="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          <input type="hidden" defaultValue=false ref="like"
          />
          <input placeholder="story" ref="story" />
        </form>
      </div>
    );
  }
}

export default UserForm;