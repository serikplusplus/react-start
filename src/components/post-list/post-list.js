import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

/**
 * Компонент
 * Список постов
 * @param {*} props - свойства компонента
 * @returns
 */
const PostList = ({ posts }) => {
	//Массив обработанных и изменненных данными с сервера элементов списка
	const elements = posts.map(post => {
		//Спред разбиение свойст
		//key - уникальный идентификатор поста
		const { id, ...itemProps } = post;
		return (
			<li key={id} className="list-group-item">
				<PostListItem {...itemProps} />
			</li>
		);
	});

	return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
