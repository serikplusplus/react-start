import React, { Component } from 'react';
import './post-list-item.css';

/**
 * Компонент
 * Элемент списка постов - отдельный пост
 * @param {*} param0 - свойства компонента
 * @returns
 */

export default class PostListItem extends Component {
	render() {
		const { label, onDelete, onToggleImportant, onToggleBeLiked, important, like } = this.props;

		let classNames = 'app-list-item d-flex justify-content-between';
		if (important) classNames += ' important';
		if (like) classNames += ' like';
		return (
			<div className={classNames}>
				<span className="app-list-item-label" onDoubleClick={onToggleBeLiked}>
					{label}
				</span>
				<div className="d-flex justify-content-center align-items-center">
					<button type="button" className="btn-star btr-sm" onClick={onToggleImportant}>
						<i className="fa fa-star" />
					</button>
					<button type="button" className="btn-trash btr-sm" onClick={onDelete}>
						<i className="fa fa-trash-o" />
					</button>
					<i className="fa fa-heart" />
				</div>
			</div>
		);
	}
}
