var app = angular.module('parseQ');

app.service('parseServices', function($http) {

this.postData = function(question) {
	return $http({
		method: 'POST',
		url: 'https://api.parse.com/1/classes/question',
		data: {
			text: question,
			status: 'red'
		}
	})
}

this.getData = function() {
	return $http({
		method: 'GET',
		url: 'https://api.parse.com/1/classes/question?order=-createdAt'
	})
}


this.updateData = function(questionObj) {
	return $http({
		method: 'PUT',
		data: {
			"status": "yellow"
		},
		url: 'https://api.parse.com/1/classes/question/' + questionObj.objectId
		
	})
}
	this.deleteQ = function(questionObj) {
		return $http.delete('https://api.parse.com/1/classes/question/' + questionObj.objectId)
	}


})