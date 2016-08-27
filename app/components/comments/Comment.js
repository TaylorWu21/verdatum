import React from 'react';


class Comment extends React.Component{
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
    this.addComment = this.addComment.bind(this);
    this.state = { comments: [] }
  }

  componentWillMount() {
    $.ajax({
      url: '/comments',
      type: 'GET',
      dataType: 'JSON',
      data: { listId: this.props._id }
    }).done( cards => {
      this.setState({ cards });
    });
  }

  addComment(comment) {
    this.setState({ comments: [...this.state.comments, comment] });
  }


  render() {
    let comments = this.state.comments.map( comment => {
      return(<Comment key={comment._id} {...card} />);
    });
    return(
      <div className="col s12 m2">
        <button onClick={this.deleteList} className="btn">Delete</button>
        <h3 className="center"
    )
  }



}