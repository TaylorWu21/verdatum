import React from 'react';
import $ from 'jquery';
import CommentForm from './CommentForm';
import Comment from './Comment';

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.addComment = this.addComment.bind(this);
		this.state = { comments: [] };
	}

	componentWillMount() {
		$.ajax({
			url: '/comments',
			type: 'GET',
			dataType: 'JSON',
			data: { userId: this.props.userId }
		}).done( comments => {
			this.setState({ comments });
		});
	}

  addComment(comment) {
    this.setState({ comments: [...this.state.comments, comment] });
  }

	render() {
		let comments = this.state.comments.map(comment => {
			return(<Comment id={comment._id} key={comment._id} {...comment} />)
		});
		return(
			<div>
				{ comments }
				<div className='row'>
					<CommentForm addComment={this.addComment} userId={this.props.userId} />
				</div>
			</div>
		);
	}
}

export default Comments;