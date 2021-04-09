import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

/**
 * Компонент
 * Приложение
 */
const App = () => {
	const data = [
		{
			label: 'Im first post',
			important: false,
			id: 'gdfaf',
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
	]; // Эмитация получение данных с сервера

	return (
		<div className="app">
			<AppHeader />
			<div className="search-panel d-flex">
				<SearchPanel />
				<PostStatusFilter />
			</div>
			<PostList posts={data} />
			<PostAddForm />
		</div>
	);
};

export default App;
