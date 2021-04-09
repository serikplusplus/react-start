import React from 'react';
import './post-add-form.css';

/**
 * Компонент
 * Форма дабовления нового поста
 * @returns
 */
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
