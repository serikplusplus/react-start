import React from 'react';
import './app-header.css';

/**
 * Компонент
 * Шапка
 * @returns
 */
const AppHeader = ({ ofliked, allPosts }) => {
	return (
		<div className="app-header d-flex">
			<h1>Sergey Skorohod</h1>
			<h2>
				{allPosts} записей, понравилось {ofliked}
			</h2>
		</div>
	);
};

export default AppHeader;
