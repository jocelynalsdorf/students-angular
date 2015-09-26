studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope){
  $scope.students = [];
  $scope.addStudent = function() {
    $scope.students.push({name: $scope.studentName}); //set value of name to the input with this directive
    $scope.studentName = null; //set it to null so that the field in html is cleared
  };
  $scope.deleteStudent = function(student){
    var index = $scope.students.indexOf(student);
    $scope.students.splice(index,1);
  };
  
});