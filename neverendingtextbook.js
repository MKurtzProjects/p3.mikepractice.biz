//This section of javascript is for styling
//-----------------

  $(function() {
    $( ".menu" ).menu();


  $( "#button" ).button();
  $( "#radioset" ).buttonset();

  $( "#tabs" ).tabs();
  
  });

//This section of javascript is for the logic of the calculations


//This function recognizes that the user has clicked the Train button.  This should generate new numbers and results for the calculation by calling the train function
$('#train').click(function() {
train();
});


//This is the train function.  This generates random numbers for the problem and results.  It then calls the answercheck function which 
var train = function() {
    var x = Math.floor((Math.random()*10)+1);
    var y = Math.floor((Math.random()*10)+1);
    var z = (x+y) * Math.floor((Math.random()*10)+1);
    var results = z/(x+y);
    $('#equation').html('Mr. Green and Mr. Yellow are ' + z + ' miles apart.  Mr. Green is running ' + x + ' MPH heading east.  Mr. Yellow is running ' + y + ' MPH heading west.  If they both leave at the same time, in how many hours will they meet?');
    answercheck(results);
};


// This is the answercheck function.  Results are passed through to it.  This function handles all validation and behavior regarding checking the answer. 
var answercheck = function(results) {

    $('#check').css('display','inline');
    $('#answer_input').css('display','inline');
    $('#validation').html("What's the answer?");
    $('#answer_input').val('');;

    //This is the function for validating if the answer input matches results
    var validate = function( results ) {
        var answer_input = $("#answer_input").val();

        //If the anwser input does match results, congratulates the user
        if(answer_input == results) {
            $('#validation').text('Great Job!  You got it right.');
        }

        //If the answer input does not match results, tell the user.
        else {
            $('#validation').text("That's not correct.  Keep trying!");
        };
    };

    //Pressing the enter button will lets users validate results
    $('#answer_input').keypress(function() {
        if (event.keyCode == 13) {
            validate(results);
        };
    });


    //Pressing the check answer button will let users validate results
    $('#check').click(function() {
        validate(results);
    });

};




