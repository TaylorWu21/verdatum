import React from 'react';
import $ from 'jquery';

class CommentForm extends React.Component{
	constructor(props) {
		super(props);
		this.addComment = this.addComment.bind(this)
	}

	addComment(e) {
		e.preventDefault();
		let admirer = this.refs.admirer;
		let content = this.refs.content;
		$.ajax({
			url: '/comments',
			type: 'POST',
			dataType: 'JSON',
			data: { admirer: admirer.value, content: content.value, userId: this.props.userId}
		}).done( comment => {
			this.props.addComment(comment);
			admirer.value = null;
			content.value = null;
		});
	}

	render() {
		return(
			<div className='center container'>
				<form>
					<input placeholder="name" ref="admirer" />
					<input placeholder="comment" ref="content" />
				</form>
				<button className='btn' onClick={this.addComment}>submit</button>
			</div>
		)
	}
}

export default CommentForm;