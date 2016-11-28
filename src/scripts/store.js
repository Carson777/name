import Backbone from 'backbone'
import _ from 'underscore'
import {PostCollection,PostModel} from './models'

const STORE = _.extend(Backbone.Events,{
	_data: {
		postCollection: new PostCollection()
	},

	_emitChange: function() {
		this.trigger('storeChanged')
	},

	_get: function(prop) {
		return this._data[prop]
	},

	_getData: function() {
		return this._data
	},

	_initialize: function() {
		this._get('postCollection').on('update',()=>{
			this._emitChange()
		})
	},

	_set: function(newData) {
		this._data = _.extend(this._data,newData)
		this._emitChange()
	}
})

STORE._initialize()

export default STORE