define(function(){
	
	/**
	 * Package helpers
	 * @author miamarti
	 */
	helpers = {
			
		/**
		 * 
		 */	
		validation : function(){
			this.values = {qtd:0,check:0};
			
			this.setQtd = function(value){
				this.values.qtd = value;
			};
			
			this.getQtd = function(){
				return this.values.qtd;
			};
			
			this.setCheck = function(value){
				this.values.check = value;
			};
			
			this.getCheck = function(){
				return this.values.checke;
			};
			
			this.setClass = function(){
				qtd = 0;
				check = 0;
				$(arguments[0]).each(function(){
					qtd++;
					if($(this).val() == ""){
						check++;
					}
				});
				this.values.qtd = qtd;
				this.values.check = check;
			};
			
			this.getValidation = function(){
				if(arguments[0]){
					if(this.values.qtd > 0){
						return false;
					} else{
						return true;
					}
				} else {
					if(this.values.qtd != this.values.check){
						return true;
					} else{
						return false;
					}
				}
			};
		},
		
		
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
//			if (arguments[0] != null) {
//				this.collection[arguments[0]];
//			}
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
		},
		
		/**
		 * @param template
		 */
		template : function(template){
			this.config = {
					newContent:''
					};
					
			this.setValue = function(tag, value){
				this.config.newContent = helpers.str_replace(tag, value,this.config.newContent);
			};
			
			this.toString = function(){
				return this.config.newContent;
			};
			
			this.config.newContent = template;
		},
		
		/**
		 * @param selector
		 * @returns
		 */
		getObj : function(selector) {
			var element;
			try {
				element = document.querySelector(selector);
			} catch (e) {
				element = selector;
			}
			element.fadeIn = function() {
				this.style.transition = '2s';
				this.style.opacity = '1';
			};
			element.fadeOut = function() {
				this.style.transition = '2s';
				this.style.opacity = '0';
			};
			return element;
		},
		
		/**
		 * 
		 */
		checkAll : function(gridId, classCheck){
			if($(gridId + ' thead input[name=checkAll]').is(':checked')){
				$(classCheck).attr("checked",true);
			} else{
				$.each($(classCheck),function(){
					var check = $(this).parent().html().replace('checked="checked"','');
					$(this).parent().html(check);
				});
			}
		},
		
		orderBy : {
			config : {coll:'', order:'asc'}
		},
		
		/**
		 * 
		 */
		gridView : function(){
			this.config = {
							id:'',
							thead:'',
							checkAll : '',
							tableHtml:'',
							theadHtml:'',
							tbodyHtml:'',
							trClick:''
							};
			
			this.setId = function(value){
				this.config.id = value;
			};
			
			this.setCheckAll = function(classCheck){
				this.config.checkAll = 'helpers.checkAll(\'#' + this.config.id + '\',\'' + classCheck + '\')';
			};
			
			this.setThead = function(value){
				this.config.thead = value;
			};
			
			this.setTrClick = function(value){
				this.config.trClick = value;
			};
			
			this.add = function(value){
				$('#' + this.config.id + ' tbody').append('<tr onClick="' + this.config.trClick + '" style="cursor:pointer;">' + value + '</tr>');
			};
			
			this.render = function(callback){
				
				this.config.theadHtml  = '<thead><tr>';
				this.config.theadHtml += ((this.config.checkAll != '')?'<th><input id="checkAll" name="checkAll" type="checkbox" onchange="' + this.config.checkAll + '"></th>':'');
				for ( var i = 0; i < this.config.thead.length; i++) {
					this.config.theadHtml += '<th>' + this.config.thead[i] + '</th>';
				}
				this.config.theadHtml += '</tr></thead>';
				this.config.tbodyHtml += '<tbody>';
				this.config.tbodyHtml += '</tbody>';
				
				this.config.tableHtml = '<table id="' + this.config.id + '" class="table table-striped">';
				this.config.tableHtml += this.config.theadHtml + this.config.tbodyHtml;
				this.config.tableHtml += '</table>';
				
				callback(this.config.tableHtml);
			};
		},
		
		/**
		 * 
		 */
		Pagination : function(){
			this.internships = {start:0, end:50, limit:50};
			
			this.reset = function(){
				this.internships.start = 0;
				this.internships.end = this.internships.limit;
				return this.internships;
			};
			
			this.setLimit = function(value){
				this.internships.limit = value;
			};
			
			this.get = function(){
				return this.internships;
			};
			
			this.getScrollTop = function(){
				return this.internships.scrollTop;
			};
			
			this.next = function(){
				this.internships.start = (this.internships.start + this.internships.limit + 1);
				this.internships.end = this.internships.start + this.internships.limit;
				return this.internships;
			};
			
			this.scroll = function(callback){
				$(document).scroll(function() {
//					console.log('scrollTop: ' + $(document).scrollTop() + ' :: ' + ($(document).scrollTop() + window.innerHeight) + ' >> ' + $(document).height());
					callback({scrollTop:$(document).scrollTop(), innerHeight:window.innerHeight, height:$(document).height()});
				});
			};
			
			this.start = function(callback){
				$(document).scroll(function() {
					if(($(document).scrollTop() + window.innerHeight) >= $(document).height()){
						callback();
					}
				});
			};
		}
	};
	
	return helpers;
});