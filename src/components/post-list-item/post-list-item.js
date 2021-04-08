import React from 'react';

const PostListItem = () => {
	return (
		<li className="app-list-item d-flex justify-content-between">
			<span className="app-list-item-label">Hi im post</span>
			<div className="d-flex justify-content-center align-items-center">
				<button type="button" className="btn-star btr-sm">
					<i className="fa fa-star" />
				</button>
				<button type="button" className="btn-trash btr-sm">
					<i className="fa fa-trash-o" />
				</button>
				<i className="fa fa-heart" />
			</div>
		</li>
	);
};
export default PostListItem;
