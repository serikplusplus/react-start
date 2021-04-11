import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap';
import './post-list.css';

/**
 * Компонент
 * Список постов
 * @param {*} props - свойства компонента
 * @returns
 */
const PostList = ({
	posts,
	onDelete,
	onToggleImportant,
	onToggleBeLiked,
	clearAllPosts,
	onToggleModal,
}) => {
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

	return (
		<ListGroup className="app-list">
			<Row>
				<Col>
					<Button className="clear-button" outline color="danger" onClick={clearAllPosts}>
						Очистить список
					</Button>
				</Col>
				<Col>
					<Button className="clear-button" outline color="success" onClick={onToggleModal}>
						Добавить пост
					</Button>
				</Col>
			</Row>
			{elements}
		</ListGroup>
	);
};

export default PostList;
