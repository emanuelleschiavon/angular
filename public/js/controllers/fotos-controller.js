angular.module('alurapic').controller('FotosController', function($scope, $http){

	$http.get('v1/fotos')
 		.then(function(retorno) {
    		$scope.fotos = retorno.data;
  		})
  		.catch(function(erro) {
    		console.log(erro);
  		});

	/*
	$http.get('v1/fotos')
		.success(function(fotos){
			$scope.fotos = fotos;
		})
		.error(function(erro){
			console.log(erro);
		});
	*/

	/*
	$scope.fotos = [{
		titulo: 'Leao',
		url: 'data:image/jpeg;base64,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'
	};]
	*/

});