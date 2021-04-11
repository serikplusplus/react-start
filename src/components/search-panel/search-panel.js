import React, { Component } from 'react';
import './search-panel.css';

/**
 * Компонент
 * Панелька поиска постов
 * @returns
 */
export default class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInPosts: '',
		};
		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(event) {
		const searchInPosts = event.target.value;
		this.setState({ searchInPosts });
		this.props.onUpdateSearch(searchInPosts);
	}

	render() {
		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="Search"
				onChange={this.onChangeSearch}
			/>
		);
	}
}
