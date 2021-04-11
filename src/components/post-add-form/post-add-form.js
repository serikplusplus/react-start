import React from 'react';
import './post-add-form.css';

/**
 * Компонент
 * Форма дабовления нового поста
 * @returns
 */
const PostAddForm = ({ onAddNewPost }) => {
	return (
		<div className="bottom-panel d-flex">
			<input type="text" className="form-control new-post-label" placeholder="Text for new post" />
			<button
				type="submit"
				className="btn btn-outline-secondary"
				onClick={() => onAddNewPost('new post')}
			>
				Add post
			</button>
		</div>
	);
};

export default PostAddForm;
