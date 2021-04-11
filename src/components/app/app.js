import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';
//import classes from '*.module.scss';

//Обертка для панельки поиска
const MainSearchPanel = styled.div`
	display: flex;
	margin: 1rem 0;

	.search-input {
		width: auto;
		flex-grow: 1;
		margin-right: 3px;
	}
`;

/**
 * Компонент
 * Приложение
 */
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					label: 'Im first post',
					important: false,
					like: false,
					id: 1,
				},
				{
					label: 'Im second post',
					important: true,
					like: false,
					id: 2,
				},
				{
					label: 'Im last post',
					important: false,
					like: false,
					id: 3,
				},
			], // Эмитация получение данных с сервера
		};

		this.maxId = 4;
		this.deleteItem = this.deleteItem.bind(this);
		this.onAddNewPost = this.onAddNewPost.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleBeLiked = this.onToggleBeLiked.bind(this);
	}

	/**
	 * Удаление элемента списка
	 * @param {*} id - id элемента => Приходит из post-list.jsx <PostListItem onDelete={() => onDelete(id)} {...itemProps} />
	 */
	deleteItem(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(element => element.id === id);

			//Не изменяем state.data на прямую ,а создаем новые данные на основе имеющихся
			//const before = data.slice(0, index); //элементы до удаляемого
			//const after = data.slice(index + 1); //элементы после удаляемого
			const newArr = [...data.slice(0, index), ...data.slice(index + 1)]; //новый массив без удаленного элемента

			//Заменяем прошлые данные на новые
			return {
				data: newArr,
			};
		});
	}

	onAddNewPost(newPostText) {
		const newPost = {
			label: newPostText,
			important: false,
			like: false,
			id: this.maxId++,
		};
		this.setState(({ data }) => {
			const newArr = [...data, newPost];
			return {
				data: newArr,
			};
		});
	}

	onToggleImportant(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(element => element.id === id);

			const oldValue = data[index];
			const newValue = { ...oldValue, important: !oldValue.important };
			const newArr = [...data.slice(0, index), newValue, ...data.slice(index + 1)];
			return {
				data: newArr,
			};
		});
	}

	onToggleBeLiked(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(element => element.id === id);

			const oldValue = data[index];
			const newValue = { ...oldValue, like: !oldValue.like };
			const newArr = [...data.slice(0, index), newValue, ...data.slice(index + 1)];
			return {
				data: newArr,
			};
		});
	}

	render() {
		const { data } = this.state;

		return (
			<div className="app">
				<AppHeader />
				<MainSearchPanel>
					<SearchPanel />
					<PostStatusFilter />
				</MainSearchPanel>
				<PostList
					posts={data}
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleBeLiked={this.onToggleBeLiked}
				/>
				<PostAddForm onAddNewPost={this.onAddNewPost} />
			</div>
		);
	}
}
