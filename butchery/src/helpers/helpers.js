define(function(){
	
	/**
	 * Package helpers
	 * @author miamarti
	 */
	helpers = {
			
		/**
		 * @param search
		 * @param replace
		 * @param subject
		 * @param count
		 * @returns
		 */
		str_replace : function(search, replace, subject, count) {
			var i = 0, j = 0, temp = '', repl = '', sl = 0, fl = 0, f = []
					.concat(search), r = [].concat(replace), s = subject, ra = Object.prototype.toString
					.call(r) === '[object Array]', sa = Object.prototype.toString
					.call(s) === '[object Array]';
			s = [].concat(s);
			if (count) {
				this.window[count] = 0;
			}

			for (i = 0, sl = s.length; i < sl; i++) {
				if (s[i] === '') {
					continue;
				}
				for (j = 0, fl = f.length; j < fl; j++) {
					temp = s[i] + '';
					repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
					s[i] = (temp).split(f[j]).join(repl);
					if (count && s[i] !== temp) {
						this.window[count] += (temp.length - s[i].length)
								/ f[j].length;
					}
				}
			}
			return sa ? s : s[0];
		},
		
		
		/**
		 * 
		 */
		ArrayList : function() {
			this.collection = [];
			this.getItem = function(index) {
				if (index <= this.collection.length - 1) {
					return this.collection[index];
				} else {
					throw "Index was out of range. Must be non-negative and less than the size of the collection";
				}
			};
			this.setItem = function(index, item) {
				if (index <= this.collection.length - 1) {
					this.collection[index] = item;
				} else {
					throw "Index was out of range. Must be non-negative and less than the size of the collection";
				}
			};
			this.add = function(item) {
				this.collection[this.collection.length] = item;
			};
			this.addRange = function(items) {
				for ( var i = 0; i < items.Count(); i++) {
					this.collection[this.collection.length] = items.GetItem(i);
				}
			};
			this.insert = function(pos, item) {
				if (pos <= this.collection.length - 1) {
					this.collection.splice(pos, 0, item);
				} else {
					throw "Index must be within the bounds of the List";
				}
			};
			this.clear = function() {
				this.collection = [];
			};
			this.count = function() {
				return this.collection.length;
			};
			this.equal = function(x, y) {
				return (x === y);
			};
			this.find = function(obj) {
				var index = -1;
				for ( var i = 0; i < this.collection.length; i++) {
					var item = this.collection[i];
					if (this.Equal(item, obj)) {
						index = i;
						break;
					}
				}
				return index;
			};
			this.exists = function(obj) {
				var isFind = false;
				if (this.Find(obj) > -1) {
					isFind = true;
				}
				return isFind;
			};
			this.forEach = function(action) {
				for ( var i = 0; i < this.collection.length; i++) {
					action(this.collection[i]);
				}
			};
			this.removeAt = function(index) {
				this.collection.splice(index, 1);
			};
			this.removeRange = function(index, count) {
				this.collection.splice(index, count);
			};
			this.getRange = function(index, count) {
				newList = new List();
				var indexCount = 0;
				for ( var i = index; i < this.collection.length; i++) {
					var item = this.collection[i];
					if (indexCount < count) {
						newList.Add(item);
					} else {
						break;
					}
					indexCount++;
				}
				return newList;
			};
			this.getCollection = function() {
				return this.collection;
			};
		}
		
	};
	return helpers;
});