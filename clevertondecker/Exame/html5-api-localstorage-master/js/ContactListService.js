var ContactListService = {
	
	list: [],
	
	getList: function() {
		ContactListService.getFromLocalStorage();
		return ContactListService.list;
	},
	
	add: function(contact) {
		ContactListService.list.push(contact);
		ContactListService.saveToLocalStorage();
	},
	
	findIndex: function(email) {
		var 
			list = ContactListService.list,
			indexFound = null;
		
		list.some(function(contact, index){
			if(email === contact.email) {
				indexFound = index;
				return true;
			}
		});
		
		return indexFound;
	},
	
	remove: function(email) {
		var index = ContactListService.findIndex(email);
		if(index !== null && confirm("Do you want to remove [" + email +"]?")) {
			ContactListService.list.splice(index, 1);
			ContactListService.saveToLocalStorage();
			return true;
		}
		return false;
	},
	
	saveToLocalStorage: function() {
		var jsonText = JSON.stringify(ContactListService.list);
		window.localStorage.setItem('contact-list', jsonText);
	},
	
	getFromLocalStorage: function() {
		var jsonText = window.localStorage.getItem('contact-list');
		if(jsonText) {
			ContactListService.list = JSON.parse(jsonText);
		}
	}
	
};