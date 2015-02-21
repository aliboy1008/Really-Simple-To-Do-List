angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, FlowType, CashFlow, $state) {
	$scope.new = {};
	$scope.new.init = function(){
		$scope.new.task = '';
		//$scope.new.amount = '';
		//$scope.new.category = '';
	};
	
	$scope.lista = CashFlow.all();
	$scope.delete = function(item){
		CashFlow.delete(item);
	};
	
	$scope.new.submit = function(){
		//CashFlow.add($scope.new.category, $scope.new.task);
		CashFlow.add($scope.new.task);
		$state.go('tab.dash');
	};
	
	$scope.categories = FlowType.all();
	$scope.new.init();
	
})

.controller('CashFlowCtrl', function($scope, CashFlow) {
	$scope.lista = CashFlow.all();
	$scope.delete = function(item){
		CashFlow.delete(item);
	};
})





// --- Unused
.controller('CashFlowNewCtrl', function($scope, FlowType, CashFlow, $state) {
	$scope.new = {};
	$scope.new.init = function(){
		$scope.new.task = '';
		//$scope.new.amount = '';
		//$scope.new.category = '';
	};
	
	$scope.new.submit = function(){
		//CashFlow.add($scope.new.category, $scope.new.task);
		CashFlow.add($scope.new.task);
		$state.go('tab.dash');
	};
	
	$scope.categories = FlowType.all();
	$scope.new.init();
});