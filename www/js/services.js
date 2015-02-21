angular.module('starter.services', [])

.factory('CashFlow', function(){

	/* var cashFlow = [
		{
			type: 'salary',
			amount: 99999999,
			description: 'Salary',
			created_at: new Date()
		},
		{
			type: 'food',
			amount: 500,
			description: 'Eat ',
			created_at: new Date() + 1
		}
	]; */
	
	var cashFlow = JSON.parse(localStorage.getItem('cashFlow')) || [];
	
	return {
		all: function(){
			return cashFlow
		},
		
		add: function(type, amount, description){
			cashFlow.push({
				type: type,
				amount: amount,
				description: description,
				created_at: new Date()
			});
			this.save();
		},
		delete:function(item){
			var idx = cashFlow.indexOf(item);
			if( idx>=0 ){
				cashFlow.splice(idx,1);
			}
		},
		save:function(){
			localStorage.setItem('cashFlow', JSON.stringify(cashFlow));
		}
	};
	
})


.factory('FlowType', function(){

	var type = {
		'salary' : {
			name: 'Salary',
			description: '',
			isIncome: true
		},
		'food' : {
			name: 'Food',
			description: '',
			isIncome: false
		}
	};
	
	return {
		getByID: function (id) {
			if( type.hasOwnProperty(id) ){
				return type[id];
			} else {
				return null;
			}
		},
		
		all: function(){
			return type;
		}
	};
	
});