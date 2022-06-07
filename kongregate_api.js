kongregateAPI = {
	getAPI() {
		return {
			services:{
				getUsername() {return '123456'},
			},
			stats:{
				submit(){},
			},
		};
	},
	loadAPI(func) {
		func();
	},
}