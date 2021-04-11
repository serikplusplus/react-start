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
			data: JSON.parse(localStorage.getItem('Posts')), // Эмитация получение данных с сервера
			term: '',
			filter: 'all',
			modal: false,
		};

		this.maxId = localStorage.getItem('MaxId');
		this.deleteItem = this.deleteItem.bind(this);
		this.onAddNewPost = this.onAddNewPost.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleBeLiked = this.onToggleBeLiked.bind(this);
		this.togglePropertyData = this.togglePropertyData.bind(this);
		this.clearAllPosts = this.clearAllPosts.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onUpdateFilter = this.onUpdateFilter.bind(this);
		this.onToggleModal = this.onToggleModal.bind(this);
	}

	/**
	 * Удаление элемента списка
	 * @param {*} id - id элемента => Приходит из post-list.jsx <PostListItem onDelete={() => onDelete(id)} {...itemProps} />
	 */
	deleteItem(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(element => element.id === id);
			const newArr = [...data.slice(0, index), ...data.slice(index + 1)]; //новый массив без удаленного элемента
			localStorage.setItem('Posts', JSON.stringify(newArr));
			//Заменяем прошлые данные на новые
			return {
				data: newArr,
			};
		});
	}

	/**
	 * Удаление всех постов
	 */
	clearAllPosts() {
		this.setState(({ data }) => {
			const newArr = [];
			localStorage.setItem('Posts', JSON.stringify(newArr));
			localStorage.setItem('MaxId', 0);
			return {
				data: newArr,
			};
		});
	}

	/**
	 * Toggle свойств data
	 * @param {*} id - номер обьекта
	 * @param {*} key - свойство для toggle
	 */
	togglePropertyData(id, key) {
		this.setState(({ data }) => {
			const index = data.findIndex(element => element.id === id);

			const oldValue = data[index];
			const newValue = { ...oldValue, [key]: !oldValue[key] };
			const newArr = [...data.slice(0, index), newValue, ...data.slice(index + 1)];
			localStorage.setItem('Posts', JSON.stringify(newArr));
			return {
				data: newArr,
			};
		});
	}

	/**
	 * Добавление новго поста
	 * @param {*} newPostText - текст поста
	 */
	onAddNewPost(newPostLabel, newPostText) {
		const newPost = {
			label: newPostLabel,
			text: newPostText,
			important: false,
			like: false,
			id: this.maxId++,
		};

		this.setState(({ data }) => {
			const newArr = [...data, newPost];
			localStorage.setItem('MaxId', this.maxId);
			localStorage.setItem('Posts', JSON.stringify(newArr));
			return {
				data: newArr,
			};
		});
	}

	/**
	 * Переключение важности поста
	 * @param {*} id - порядковый номер поста
	 */
	onToggleImportant(id) {
		this.togglePropertyData(id, 'important');
	}

	/**
	 * Переключение понравилось у поста
	 * @param {*} id - порядковый номер поста
	 */
	onToggleBeLiked(id) {
		this.togglePropertyData(id, 'like');
	}

	/**
	 * Поиск постов
	 * @param {*} items - посты
	 * @param {*} text - искаемый текст
	 * @returns - подходящие посты
	 */
	searchPost(items, term) {
		if (term.length === 0) return items;
		return items.filter(elem => {
			return elem.label.indexOf(term) > -1;
		});
	}

	/**
	 * Фильтрация постов
	 * @param {*} items - список постов
	 * @param {*} filter - фильтер
	 * @returns - подходящие посты
	 */
	filerPost(items, filter) {
		if (filter === 'like') {
			return items.filter(elem => elem.like);
		}
		if (filter === 'important') {
			return items.filter(elem => elem.important);
		}
		return items;
	}

	/**
	 * Обновление значения поиска
	 * @param {*} term - строка для поиска
	 */
	onUpdateSearch(term) {
		this.setState({ term });
	}
	/**
	 * Обновление значения фильтра постов
	 * @param {*} filter - название фильтра
	 */
	onUpdateFilter(filter) {
		this.setState({ filter });
	}

	onToggleModal() {
		this.setState(({ modal }) => ({
			modal: !modal,
		}));
	}

	render() {
		const { data, term, filter } = this.state;
		const likedPosts = this.state.data.filter(elem => elem.like).length;
		const allPosts = this.state.data.length;
		let visiblePosts = this.filerPost(this.searchPost(data, term), filter);
		return (
			<div className="app">
				<AppHeader ofliked={likedPosts} allPosts={allPosts} />
				<MainSearchPanel>
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<PostStatusFilter filter={filter} onUpdateFilter={this.onUpdateFilter} />
				</MainSearchPanel>
				<PostList
					posts={visiblePosts}
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleBeLiked={this.onToggleBeLiked}
					clearAllPosts={this.clearAllPosts}
					onToggleModal={this.onToggleModal}
				/>
				<PostAddForm
					onAddNewPost={this.onAddNewPost}
					modal={this.state.modal}
					onToggleModal={this.onToggleModal}
				/>
			</div>
		);
	}
}
