app.controller("CaseChangerController",['$scope',function($scope){

    //$scope.textBox=$scope.textBox.toString().toUpperCase();

   $scope.allUpperCase = function()
   {
       var input = $scope.textBox.toString();

        /*For all letters in Upper Case*/
        $scope.textBox=input.toUpperCase();
   }
   $scope.allLowerCase = function()
   {
       var input = $scope.textBox.toString();

        /*For all letters in Upper Case*/
        $scope.textBox=input.toLowerCase();
   }
    
   $scope.firstLetterUpperCase = function()
   {
       var input = $scope.textBox.toString();
       /*For only first letters in Upper Case*/       
        $scope.textBox= input.replace(/\w+\S*/g, function(word){return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();});
        
   }

    /*For reverse Case*/         
    $scope.reverseCase= function()
    {
        var input = $scope.textBox.toString();
        $scope.textBox=function(){
                var c='';
                var res='';
                for(var i=0;i<input.length;i++)
                {
                    c=input.charAt(i);
                    res += (c == c.toUpperCase()) ? c.toLowerCase() : c.toUpperCase(); 
                }
                return res;
            }();
    }


    /*For StUdLyCaPs Case*/         
    $scope.studlyCaps= function()
    {
        var input = $scope.textBox.toString();
        $scope.textBox = function(){
                var c='';
                var res='';
                for(var i=0;i<input.length;i++)
                {
                    c=input.charAt(i);
                    res += (i%2 == 0) ? c.toLowerCase() : c.toUpperCase();
                }
                return res;
            }();
    }
    
    /*For Sentence Case*/
    $scope.sentenceCase= function()
    {
        var input = $scope.textBox.toString();
        $scope.textBox=input.replace(/[^\.|\!|\?|\n|\r]+[\.|\!|\?|\n|\r]\s|[^\.|\!|\?|\n|\r]*/g, function(word){return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();});
    } 

}]);