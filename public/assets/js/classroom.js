var cfrm = $("#classForm");
var classData = JSON.stringify(cfrm.serializeArray());
//console.log(JSON.stringify(classData));

var frm = $("#studentsForm");
var studentData = JSON.stringify(frm.serializeArray());
//console.log(JSON.stringify(studentData));



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

console.log("classroom");

//========================================================> Below is all added JS from Houston ==
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

  var arr = ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5", "Student 6", "Student 7", "Student 8", "Student 9", "Student 10", "Student 11", "Student 12"];

  $("#randomize").on("click", function () {
    $("#randomize").text("Generate New Seating");
    $("#whereToPutSeats").text("");
    arr = randomizer(arr);

    for (i=0; i < arr.length; i++) {
      studentButton = "<a class='waves-effect waves-light btn studentButtons'>"+arr[i]+"</a>";
      $("#whereToPutSeats").append(studentButton);
      console.log(arr[i]);
    };
    // modalButton = "<a class='waves-effect waves-light btn col s12' href='#modal1'>Modal</a>";
    // $("#seatingContainer").prepend(modalButton);
  });

  $(document).ready(function(){
    $('.modal').modal();
  });
