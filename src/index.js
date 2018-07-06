import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Hello () {
	let phrase = "World"
	return (
			<h1>Hello {phrase} </h1>
		)
}

function SayForName (props) {
	return (
		<div>
			<h1> Мое имя {props.name}, фамилия  - {props.surname}</h1>
			<a href={props.link}> Ссылка на мой профиль </a>
		</div>
		)
}

function MeetAll () {
	return (
			<div>
				<SayForName name="Alex" surname="Tyurin" link="vk.com" />
				<SayForName name="Irina" surname="Tyurina" link="vk.com" />
				<SayForName name="Valrntina" surname="Tyurin" link="vk.com" />
			</div>
		)
}


ReactDOM.render(<MeetAll />, document.getElementById('root'));
registerServiceWorker();
