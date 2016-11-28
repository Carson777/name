import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'
import User from '../models/userModel'
window.User = User

const Header = React.createClass({
	getUser: function(){
		if(User.getCurrentUser()){
			return User.getCurrentUser().email
		} else {
			return "none"
		}
	},
	loginCheck: function(){
		console.log('checking')
		if(User.getCurrentUser()){
			console.log('User is logged in')
			return(
				<div>
					<div className='buttons'>
						<button className='button' onClick={ACTIONS.homeViewChange}>Home</button>
						<button className='button' onClick={ACTIONS.postViewChange}>Post</button>
						<button className='button' onClick={ACTIONS.profileViewChange}>Profile</button>
						<button className='button' onClick={ACTIONS.logout}>Log Out</button>
					</div>
					<div className= "currentUser">
						<p> Current User: {this.getUser()} </p>
					</div>
				</div>
			)
		} else {
			console.log('User is not logged in')
			return(
				<div>
					<div className='buttons'>
						<button className='button' onClick={ACTIONS.homeViewChange}>Home</button>
						<button className='button' onClick={ACTIONS.loginViewChange}>Login</button>
					</div>
					<p className= "currentUser"> You are not logged in </p>
				</div>
			)

		}
	},
	render: function(){
		return(
			<div className='header'>
				<h2>Share your misinformed opinions!</h2>
				{this.loginCheck()}
			</div>
		)
	}
})
// var LoggedIn = React.createClass({
// 	getUser: function(){
// 		if(User.getCurrentUser()){
// 			return User.getCurrentUser().email
// 		} else {
// 			return "none"
// 		}
// 	},
// 	render: function(){
// 		return(
// 			<div>
// 				<button onClick={ACTIONS.homeViewChange}>Home</button>
// 				<button onClick={ACTIONS.postViewChange}>Post</button>
// 				<button onClick={ACTIONS.profileViewChange}>Profile</button>
// 				<button onClick={ACTIONS.logout}>Log Out</button>
// 				<p> Current User: {this.getUser()} </p>
// 			</div>
// 		)
// 	}
// })
// var NotLoggedIn = React.createClass({
// 	render: function(){
// 		return(
// 			<div>
// 				<button onClick={ACTIONS.homeViewChange}>Home</button>
// 				<button onClick={ACTIONS.loginViewChange}>Login</button>
// 				<p> You are not logged in </p>
// 			</div>
// 		)
// 	}
// })

export default Header