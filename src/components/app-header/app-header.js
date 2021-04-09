import React from 'react';
import './app-header.css';

/**
 * Компонент
 * Шапка
 * @returns
 */
const AppHeader = () => {
	return (
		<div className="app-header d-flex">
			<h1>Sergey Skorohod</h1>
			<h2>5 записей, понравилось 0</h2>
		</div>
	);
};

export default AppHeader;
