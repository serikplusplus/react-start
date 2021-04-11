import React, { Component } from 'react';
import './post-status-filter.css';

/**
 * Компонент
 * Фильтер постов
 * @returns
 */
export default class PostStatusFilter extends Component {
	constructor(props) {
		super(props);
		this.buttons = [
			{ label: 'Все', name: 'all' },
			{ label: 'Понравилось', name: 'like' },
			{ label: 'Важные', name: 'important' },
		];
		this.state = {};
	}

	render() {
		const filterButton = this.buttons.map(({ name, label }) => {
			const active = this.props.filter === name; //проверка на активность кнопки
			const activeClass = active ? 'btn-info' : 'btn-outline-info'; //Какой класс добавлять актив или не актив
			return (
				<button
					key={name}
					className={`btn ${activeClass}`}
					onClick={() => this.props.onUpdateFilter(name)}
				>
					{label}
				</button>
			);
		});

		return filterButton;
	}
}
