app.controller("CaseChangerController",['$scope',function($scope){

    //$scope.output=$scope.input.toString().toUpperCase();

    $scope.inputChanged=function(){
        var input = $scope.input.toString();

        /*For all letters in Upper Case*/
        $scope.allUpperCase=input.toUpperCase();

        /*For all letters in lower Case*/
        $scope.allLowerCase=input.toLowerCase();

        /*For only first letters in Upper Case*/       
        $scope.firstLetterUpperCase= input.replace(/\w+\S*/g, function(word){return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();});
        
        /*For reverse Case*/         
        $scope.reverseCase= function(){
            var c='';
            var res='';
            for(var i=0;i<input.length;i++)
            {
                c=input.charAt(i);
                res += (c == c.toUpperCase()) ? c.toLowerCase() : c.toUpperCase(); 
            }
            return res;
        }();

        /*For StUdLyCaPs Case*/         
        $scope.studlyCaps= function(){
            var c='';
            var res='';
            for(var i=0;i<input.length;i++)
            {
                c=input.charAt(i);
                res += (i%2 == 0) ? c.toLowerCase() : c.toUpperCase();
            }
            return res;
        }();

        /*For Sentence Case*/
        $scope.sentenceCase= input.replace(/[^\.|\!|\?|\n|\r]+[\.|\!|\?|\n|\r]\s|[^\.|\!|\?|\n|\r]*/g, function(word){return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();});
            
       
    }

    

}]);