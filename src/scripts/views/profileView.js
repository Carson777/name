import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'
import Header from './header'

var ProfileView = React.createClass({
	componentWillMount: function() {
		ACTIONS.fetchMyPosts()
		STORE.on('storeChanged',()=>{
			this.setState(STORE._getData())
		})
	},
	getInitialState: function() {
		return STORE._getData()
	},
	render: function(){
		return(
			<div className='homeView'>
				<Header />
				<h3 className='view-title'>My Posts</h3>
				<PostDisplay collection={this.state.postCollection}/>
			</div>
		)
	}
})

var PostDisplay = React.createClass({
	_makePost: function(postModel) {
		return <Post model={postModel} />
	},
	render: function(){
		var coll = this.props.collection
		console.log(coll)
		return(
			<div className='post-display'>
				<ul>
	 				{coll.map(this._makePost).reverse()}
	 			</ul>
			</div>
		)
	}
})
var Post = React.createClass({
	deletePost: function(){
		ACTIONS.deletePost(this.props.model)
	},
	render: function(){
		var content = this.props.model.get('content')
		var email = this.props.model.get('email')
		var title = this.props.model.get('title')
		return(
			<li className='post'>
				<h3>{title}</h3>
				<h4>{content}</h4>
				<p>{email}</p>
				<button onClick={this.deletePost}>Delete Post</button>
			</li>
		)
	}
})
//<span className='text'>{this.props.model.get('post')}</span>
export default ProfileView