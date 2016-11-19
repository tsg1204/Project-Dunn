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
    $('.modal').modal();

    $('#whereToPutSeats a').each(function() {
      arr.push(this);
    })
  });
