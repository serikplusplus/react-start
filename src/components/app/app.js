import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from "../post-add-form";


import './app.css';
import styled from 'styled-components';

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
const App = () => {
	const data = [
		{
			label: 'Im first post',
			important: false,
			id: 'gdfdd',
		},
		{
			label: 'Im second post',
			important: true,
			id: 'vadf',
		},
		{
			label: 'Im last post',
			important: false,
			id: 'nnnsda',
		},
		this.deleteItem = this.deleteItem.bind(this);
		this.onAddNewPost = this.onAddNewPost.bind(this);

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

	return (
		<div className="app">
			<AppHeader />
			<MainSearchPanel>
				<SearchPanel />
				<PostStatusFilter />
			</MainSearchPanel>
					onDelete={this.deleteItem}
				<PostAddForm onAddNewPost={this.onAddNewPost} />
		</div>
	);
};

export default App;
