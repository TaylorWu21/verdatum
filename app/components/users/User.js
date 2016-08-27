import React from 'react';
import $ from 'jquery';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.state = { edit: false };
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  updateUser() {
    let name = this.refs.name.value;
    let story = this.refs.story.value;
    $.ajax({
      url: `/users/${this.props._id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { name, story }
    });done( user => {
      this.props.updateUser(user._id, name, story); 
      this.toggleEdit();
    });
  }

  deleteUser() {
    $.ajax({
      url: `/users/${this.props._id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( () => {
      this.props.deleteUser(this.props._id);
    });
  }


  user() {
    return (
      <div className="col s12 m3">
        <div className="card blue-grey">
          <div className="card-content white-text">
            <span onClick={this.toggleEdit} className="card-title"> {this.props.name}</span>
            <p>{this.props.story}</p>
          </div>
          <div className="card-action">
            <button onClick={this.deleteUser} className="btn">Delete</button>
            <a href={`/users/${this.props._id}`} className="btn">Show</a>
          </div>
        </div>
      </div>
    );
  }

  edit() {
    return (
      <div className="col s12 m3">
        <div className="card blue-grey">
          <div className="card-content white-text">
            <input
              required={true}
              ref="name"
              placeholder={this.props.name}
              defaultValue={this.props.name}
              />
              <textarea ref="story">{this.props.story}</textarea>
            </div>
            <div className="card-action">
              <button onClick={this.toggleEdit} className="btn">Cancel</button>
              <button onClick={this.updateUser} className="btn">Update</button>
            </div>
          </div>
        </div>
    );
  }

  render() {
    if (this.state.edit)
      return this.edit();
    else
      return this.user();
  }

}

export default User;