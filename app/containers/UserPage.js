import React from 'react';
import Comments from '../components/comments/Comments'

class UserPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<Comments userId={this.props.id} />
			</div>
		)
	}
}

export default UserPage;