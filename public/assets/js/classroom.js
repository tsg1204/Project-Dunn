// var cfrm = $("#classForm");

// //console.log(JSON.stringify(classData));

// var frm = $("#studentsForm");
// var studentData = JSON.stringify(frm.serializeArray());
// //console.log(JSON.stringify(studentData));



// $( ".info").each(classData, function( i, field ) {
//   console.log( " " + classData.value + " " );
// });

// $( "form" ).submit(function( event ) {
// 	var formData = $(this).serializeArray();
//   	console.log( formData );
//   	StudentList[name] = formData.value;
//   	event.preventDefault();
// });

// var fields = $('#studentsForm :input');
// $.each(fields, function(i, field) {
//     var dom = $(field),
//         name = dom.attr('id'),
//         value = dom.val();
//     StudentList[name] = value;
// });

// Handlebars.registerHelper('link', function(obj) {
//     var url  = obj.url;
//     var text = obj.text;
//     if (text == undefined) {
//         text = url;
//     }
//     return new Handlebars.SafeString( '<a href="' + url + '">' + text + '</a>' );
// });

// console.log("classroom");

//========================================================> Below is all added JS from Houston == Tatiana commented out for now

//For StudentInfo
// var studentCount = 1;
// var studentNames = [];

<<<<<<< bc1edf129ebf596cc205faf78d1ff911f70b9400
$("#addMoreStudents").on("click", function () {
  var student1 = $("#student1").val();
  var addedStudent = "<p>" + studentCount + ". " + student1 + "</p>";
  $("#studentList").append(addedStudent);
  studentNames.push(student1);
  studentCount++;
  $("#addMoreStudents").text("Add Another Student");
  $("#student1").val("");
});
=======
// $("#addMoreStudents").on("click", function () {
//   //capture the value
//   var student1 = $("#student1").val();

//   //Erase the html from welcome
//   // $("#studentAdditions").text("");

//   //append new student
//   var addedStudent = "<p>" + studentCount + ". " + student1 + "</p>";
//   $("#studentList").append(addedStudent);

//   //log that new student into an array
//   studentNames.push(student1);
//   console.log(studentNames);

//   studentCount++;
//   $("#addMoreStudents").text("Add Another Student");
//   $("#student1").val("");
// });
>>>>>>> student table, classroom contr changed


//For Classroom
function randomizer(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

var arr = [];
//var arr = ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5", "Student 6", "Student 7", "Student 8", "Student 9", "Student 10", "Student 11", "Student 12"];

  $("#randomize").on("click", function () {
    $("#randomize").text("Generate New Seating");
    $("#whereToPutSeats").text("");
    arr = randomizer(arr);
    for (i=0; i < arr.length; i++) {
      studentButton = "<a class='waves-effect waves-light btn studentButtons'>"+arr[i].innerHTML+"</a>";
      $("#whereToPutSeats").append(studentButton);
      console.log(arr[i]);
    };
  });



  $(document).ready(function(){
    // var classData = JSON.stringify(cfrm.serialize());
    // console.log(classData);

    $('.modal').modal();

    $('#whereToPutSeats a').each(function() {
      arr.push(this);
    })
    //console.log(arr);
  });

  // $("#addGrade").unbind().on("click", function (event) {
  //   event.preventDefault();
  //   var grade = $("#gradeInput").val();
  //   $("#student1Grade").append(grade);
  //   $("gradeInput").val("");
  //   console.log(grade);
  // })

