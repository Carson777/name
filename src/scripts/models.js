import Backbone from 'backbone'

export const PostModel = Backbone.Model.extend({
	urlRoot: "/api/tasks",
	idAttribute: '_id'
})

export const PostCollection = Backbone.Collection.extend({
	url: "/api/tasks",
	model: PostModel
})