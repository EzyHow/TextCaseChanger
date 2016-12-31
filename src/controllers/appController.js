app.controller("CaseChangerController",['$scope',function($scope){

    $scope.intialize=function()
    {
        $scope.disableButtons=true;
        $scope.disableButtons=false;
        $scope.textBox="Type or paste your text here and click on desired button to see magic."
    }

   /*For all letters in Upper Case*/
   $scope.allUpperCase = function()
   {
       $scope.disableButtons=true;
       var input = $scope.textBox.toString();
        $scope.textBox=input.toUpperCase();
        $scope.disableButtons=false;
   }

    /*For all letters in Upper Case*/
   $scope.allLowerCase = function()
   {
       $scope.disableButtons=true;
       var input = $scope.textBox.toString();
        $scope.textBox=input.toLowerCase();
        $scope.disableButtons=false;
   }
   
    /*For only first letters in Upper Case*/    
   $scope.firstLetterUpperCase = function()
   {
       $scope.disableButtons=true;
       var input = $scope.textBox.toString();      
        $scope.textBox= input.replace(/\w+\S*/g, function(word){return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();});
        $scope.disableButtons=false;
   }

    /*For reverse Case*/         
    $scope.reverseCase= function()
    {
        $scope.disableButtons=true;
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
            $scope.disableButtons=false;
    }


    /*For StUdLyCaPs Case*/         
    $scope.studlyCaps= function()
    {
        $scope.disableButtons=true;
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
            $scope.disableButtons=false;
    }
    
    /*For Sentence Case*/
    $scope.sentenceCase= function()
    {
        $scope.disableButtons=true;
        var input = $scope.textBox.toString();
        $scope.textBox=input.replace(/[^\.|\!|\?|\n|\r]+[\.|\!|\?|\n|\r]\s|[^\.|\!|\?|\n|\r]*/g, function(word){return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();});
        $scope.disableButtons=false;
    } 

    $scope.copyToClipboard =function()
    {
        $scope.disableButtons=true;
        document.getElementById("mainText").select();
        document.execCommand('copy');
        $scope.disableButtons=false;
    }

}]);