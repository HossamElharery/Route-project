

// Add item
var listItem = $('#itemsUl');


 $('#addBtn').click(function (e) {
  var itemUser = $('#itemInput').val();
  var item = $('<li class="form-control">'+ itemUser +'<button class="btn btn-danger delete">X</button></li>');
  item.appendTo(listItem);

  e.preventDefault();


});

$(document).on('click','.delete',function(){
  $(this).parents('li').remove();
});


// hustlin
var playSound = new Audio();
playSound.src = "sounds/Baby-Laugh.mp3";

$('.music').hover(function () {

  playSound.play();// for play sound
$('.hustlin').addClass('color_chang');


 });

$('.music').mouseleave(function () {
  $('.hustlin').removeClass('color_chang');
  playSound.pause();// for pause sound
  enableLoop();
});

// make sound continue
function enableLoop() {
  playSound.loop = true;
}


// counter
var count = new Date("dec 1,2020 00:01:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var d = count - now;

  var days = Math.floor(d/(1000*60*60*24));
  var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
  var minutes = Math.floor((d%(1000*60*60))/(1000*60));
  var seconds = Math.floor((d%(1000*60))/1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if(d <= 0){
    clearInterval(x);
  }
},1000);



// RGB

$('#colorR').hover(function(){

  $('#R-fill').attr('fill', '#000000');
  $('#G-fill').attr('fill', '#000000');
  $('#B-fill').attr('fill', '#000000');
  $('#rgbSection').css('backgroundColor', '#FF0000');


});
$('#colorG').hover(function(){

  $('#R-fill').attr('fill', '#000000');
  $('#G-fill').attr('fill', '#000000');
  $('#B-fill').attr('fill', '#000000');
  $('#rgbSection').css('backgroundColor', '#00FF00');


});
$('#colorB').hover(function(){

  $('#R-fill').attr('fill', '#000000');
  $('#G-fill').attr('fill', '#000000');
  $('#B-fill').attr('fill', '#000000');
  $('#rgbSection').css('backgroundColor', '#0000FF');


});



$('#colorR,#colorG,#colorB').mouseleave(function(){


  $('#rgbSection').css('backgroundColor', '#FFFFFF');


});


// Form validation

var userName = document.getElementById("name");
var userEamail = document.getElementById("email");
var userPhone = document.getElementById("phone");
var userNameAlert = document.getElementById("namealert");
var userEmailAlert = document.getElementById("emailalert");
var userPhoneAlert = document.getElementById("phonealert");

function validateUserName() {
    var regex = /^[a-zA-Z]{2,10}/;
    if (regex.test(userName.value) == true) {
        userNameAlert.style.display = "none";
    } else {
        userNameAlert.style.display = "block";
    }
}

function validateUserEmail() {
    var regex = /^[a-zA-Z0-9]{5,60}@[a-z]{3,10}.([a-z]{2,10})$/;
    if (regex.test(userEamail.value) == true) {
        userEmailAlert.style.display = "none";
    } else {
        userEmailAlert.style.display = "block";
    }
}

function validateUserPhone() {
    var regex = /^01(11|14|01|15|00)[0-9]{7}$/;
    if (regex.test(userPhone.value) == true) {
        userPhoneAlert.style.display = "none";
    } else {
        userPhoneAlert.style.display = "block";
    }
}
$('textarea').keypress(function () {
        var strng = document.getElementById("exampleFormControlTextarea1").value;
        var lenthOf = strng.length;
        console.log(lenthOf);
        if (lenthOf < 30) {
            $(".msg").text(30 - (lenthOf += 1) + "lettre remailng");
        } else {
            $(".msg").text("finished");
            this.value = this.value.substring(0, max);
        }
    });
