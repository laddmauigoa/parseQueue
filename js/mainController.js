var app = angular.module('parseQ')

app.controller('mainCtrl', function($scope, parseServices) {

	$scope.postQuestion = function() {
		parseServices.postData($scope.question).then(function(results) {
			$scope.getParseData()

		});
		
	
	}

	$scope.getParseData = function() {
		parseServices.getData().then(function(res) {
			$scope.questions =  res.data.results


		}) 
	}
	$scope.getParseData();

	 $scope.status = function(questionObj) {
	 	console.log(questionObj)
		parseServices.updateData(questionObj).then(function(){
			$scope.getParseData();
		});
	}


	$scope.deleteQ = function(questionObj) {
		parseServices.deleteQ(questionObj).then(function() {
		$scope.getParseData();
		})
	}

})
