var app = angular.module("modalApp",[]);
app.controller("modalController",function($scope){
	$scope.visible = false;
	$scope.showModal = function(){
		$scope.visible = true;
	};
	/*$scope.showwww = function(){
		alert()
	}*/
});
app.directive("modalDirective",function(){
	return{
		restrict: 	"E",
		template: 	`<div class="custom-modal">  
						<div class="modal-content">
							<div class="modal-header">
								<h1>Modal Header</h1>
							</div>
							<div class="modal-body" ng-transclude>
								<h1>Modal Body</h1>
							</div>
						</div>
					</div>`,
		replace:true,
		transclude:true,
		scope:{
			visible:"=show"
		},
		link:function(scope, ele, attrs){
		  	ele.on('click',function(e){
		  		var  hasClass = angular.element(e.target).hasClass('custom-modal');
		  		if(scope.visible && hasClass){
		  			ele.removeClass("in");
		  			scope.$apply(function () {
		  				scope.visible = false;
				    });		  			
		  		}
		  	});
		  	function showmodal(){
	  			ele.addClass("in");
		  	};
		  	scope.$watch("visible",function(n){
		  		if(n){
		  			scope.visible = n;
		  			showmodal();
		  		}		  		
		  	})
		}
	}
});