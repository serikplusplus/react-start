import React from 'react';

const PostAddForm = () => {
	return (
		<form className="bottom-panel d-flex">
			<input type="text" className="form-control new-post-label" placeholder="Text for new post" />
			<button type="submit" className="btn btn-outline-secondary">
				Add post
			</button>
		</form>
	);
};

export default PostAddForm;
