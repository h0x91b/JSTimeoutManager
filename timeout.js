/*
Author: h0x91b (h0x91b@gmail.com Arseniy Pavlenko)
Date: 2013-03-06 19:50
Available via the MIT or new BSD license

https://github.com/h0x91b/JSTimeoutManager
*/

(function(){
	/**
	 * @constructor
	 */
	var Timeout = function(){
		var self = this;
		this.settimeout = setTimeout;
		this.cleartimeout = clearTimeout;
		
		this['set'] = this.newTimeout;
		this['del'] = this.del;
		this['pause'] = this.pauseTimeout;
		this['resume'] = this.resume;
		this.internalData = {};
	}
	Timeout.prototype = {
		internalId: 1,
		settimeout: null,
		cleartimeout: null,
		pauseAll: function(){
			for(var internalId in this.internalData)
				this.pauseTimeout(internalId);
		},
		resumeAll: function(){
			for(var internalId in this.internalData)
				this.resume(internalId);
		},
		newTimeout: function(func,time,loop){
			var self = this;

			var internalId = this.internalId++
			loop = loop || false;
			var obj = {
				timeoutId: 0,
				start: new Date().getTime(),
				time: time,
				remaintime: time,
				is_loop: loop,
				is_pause: false,
				callback: func
			};
			obj.standartTimeoutFunc = function(){
				if(!obj.is_loop){
					delete self.internalData[internalId];
					obj.callback();
					obj = null;
					return;
				}

				obj.callback();
				obj.start = new Date().getTime();
				obj.timeoutId = self.settimeout.call(window,obj.standartTimeoutFunc,time);
			}
			obj.timeoutId = this.settimeout.call(window,obj.standartTimeoutFunc,time);
			this.internalData[internalId] = obj;
			return internalId;
		},
		del: function(internalId){
			if(!internalId) return;
			var obj = this.internalData[internalId];
			if(!obj) return;

			this.cleartimeout.call(window,obj.timeoutId);
			delete this.internalData[internalId];
			obj = null;
		},
		pauseTimeout: function(internalId){
			if(!internalId) return this.pauseAll();
			var obj = this.internalData[internalId];
			if(!obj) return;
			if(obj.is_pause) return;

			var time = new Date().getTime();
			this.cleartimeout.call(window,obj.timeoutId);
			obj.remaintime = obj.time - (time - obj.start);
			obj.remaintime = obj.remaintime > 0 ? obj.remaintime : 1;
			obj.is_pause = true;
		},
		resume: function(internalId){
			if(!internalId) return this.resumeAll();
			var obj = this.internalData[internalId];
			if(!obj) return;
			if(!obj.is_pause) return;

			obj.internalId = this.settimeout.call(window,obj.standartTimeoutFunc,obj.remaintime);
			obj.is_pause = false;
		}
	}

	window['Timeout'] = Timeout;
})()
