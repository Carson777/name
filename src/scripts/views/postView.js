import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'
import Header from './header'

var PostView = React.createClass({
	componentWillMount: function() {
		STORE.on('storeChanged',()=>{
			this.setState(STORE._getData())
		})
	},
	getInitialState: function() {
		return STORE._getData()
	},
	_handleSubmit: function(eventObj){
		eventObj.preventDefault()
		var title = eventObj.target.title.value
		var post = eventObj.target.post.value 
		ACTIONS.createPost(post,title)
		eventObj.target.title.value = ''
		eventObj.target.post.value = ''
		location.hash = 'profile'
	},
	render: function(){
		return(
			<div>
				<Header />
				<form onSubmit={this._handleSubmit} className='post-view'>
					<h3>Blog - Post</h3>
					<p>Title</p>
					<input className='title-input' name='title'/>
					<p>Body</p>
					<input className='body-input' name='post'/>
					<button className='post-input' type='submit'>Post</button>
				</form>
			</div>
		)
	}
})
//<span className='text'>{this.props.model.get('post')}</span>
export default PostView