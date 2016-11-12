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