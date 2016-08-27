import React from 'react';
import $ from 'jquery';


class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
  }

  addUser(e) {
    e.preventDefault();
    let story = this.refs .story;
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
      this.refs.form.value =null;
      debugger
    })
  }

  render() {
    return (
      <div className="center">
        <form onSubmit={this.addUser} ref="form">
          <input placeholder="name" ref="name" />
          <input placeholder="age" ref="age" />
          <select ref="gender" form="userform">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input placeholder="story" ref="story" />
        </form>
        <button className="btn" onClick={this.addUser}>Submit</button>
      </div>
    );
  }
}

export default UserForm;
