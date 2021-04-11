import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css';

/**
 * Компонент
 * Список постов
 * @param {*} props - свойства компонента
 * @returns
 */
const PostList = ({ posts, onDelete, onToggleImportant, onToggleBeLiked }) => {
	//Массив обработанных и изменненных данными с сервера элементов списка
	const elements = posts.map(post => {
		//Спред разбиение свойст
		//key - уникальный идентификатор поста
		const { id, ...itemProps } = post;
		return (
			<ListGroupItem key={id}>
				<PostListItem
					onDelete={() => onDelete(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleBeLiked={() => onToggleBeLiked(id)}
					{...itemProps}
				/>
			</ListGroupItem>
		);
	});

	return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;