import React from 'react';
import $ from 'jquery';

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
    // let comments = this.state.coments.map( comment => {
    //   return(<Comment key={comment._id} {...comment} />);
    // });
		return(
			<div>
				<h1>Comments component working</h1>
			</div>
		)
	}
}

export default Comments;