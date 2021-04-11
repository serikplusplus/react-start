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
		this.onAddNewPost = this.onAddNewPost.bind(this);
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
				<PostAddForm onAddNewPost={this.onAddNewPost} />
		</div>
	);
};

export default App;
