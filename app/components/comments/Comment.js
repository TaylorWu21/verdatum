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
		let comments = this.state.comment.map( comment => {
			return(
				<div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{comment.admirer}</span>
              <p>{comment.content}</p>
            </div>
            <div className='card-action'>
            	<button onClick={this.deleteComment} className='btn'>Delete</button>
            </div>
          </div>
        </div>
      </div>
			)
		})
	}
}

export default Comment;