import React from 'react';
import $ from 'jquery';

class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.deleteComment = this.deleteComment.bind(this);
	}

	deleteComment() {
		$.ajax({
			url: `/comments/${this.props.id}`,
			type: "DELETE",
			data: { id: this.props.id }
		}).done( () => {
			this.props.deleteComment(this.props._id)
		})
	}

	render() {
		return(
			<div className="row">
        <div className="col s12 m4">
          <div className="card white">
            <div className="card-content">
              <span className="card-title">Admirer: {this.props.admirer}</span>
              <p>Comment: {this.props.content}</p>
            </div>
            <div className='card-action'>
            	<button onClick={this.deleteComment} className='btn'>Delete</button>
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default Comment;
