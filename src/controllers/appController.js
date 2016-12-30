app.controller("CaseChangerController",['$scope',function($scope){

    //$scope.output=$scope.input.toString().toUpperCase();

    $scope.inputChanged=function(){
        var s = $scope.input.toString();
        $scope.output=s.toUpperCase();
    }

}]);