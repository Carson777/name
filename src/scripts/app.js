import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import HomeView from './views/homeView'
import PostView from './views/postView'
import LoginView from './views/loginView'
import ProfileView from './views/profileView'
const app = function() {


	const Router = Backbone.Router.extend({
		routes: {
			"home": "handleHome",
			"login": "handleLogin",
			"post": "handlePost",
			"profile": "handleProfile",
			"*default": "handleDefault"
		},

		handleHome: function() {
			console.log('handling home')
			ReactDOM.render(<HomeView />, document.querySelector(".container"))
		},
		handleLogin: function() {
			ReactDOM.render(<LoginView />, document.querySelector(".container"))
		},
		handlePost: function() {
			ReactDOM.render(<PostView />, document.querySelector(".container"))
		},
		handleProfile: function() {
			ReactDOM.render(<ProfileView />, document.querySelector(".container"))
		},
		handleDefault: function(){
			location.hash = "home"
		},
		initialize: function() {
			Backbone.history.start()
		}

	})

	new Router()

	
}


app()