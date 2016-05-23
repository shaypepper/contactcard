$(document).ready(function(){
  var brightColors = [
    'hotpink',
    'gold',
    'greenyellow',
    'dodgerblue',
    'darkorchid',
    'darkorange',
    'aquamarine',
    'coral',
    'yellow',
    'tomato',
    'red',
    'white'
  ]
  var randomColor = () => brightColors[Math.floor( Math.random() * brightColors.length)];

  function cardFlip() {
    $('.card:last-child').on('click', function(){
      var hidden = $(this).children('[hidden]');
      $(this).children('[hidden != "hidden"]').attr('hidden',"hidden");
      hidden.removeAttr('hidden');
    })
  }

  $('#submit').click(function(){
    $("#contactCards").append('<div class="card"></div>')
    $(".card:last-child").append('<p>' + $("#firstName").val() + ' ' + $("#lastName").val() + "</p>");
    $(".card:last-child").append('<p hidden="hidden">' + $("#details").val() + "</p>");
    $(".card:last-child").css('color',randomColor);
    cardFlip();

    $("#firstName, #lastName, #details").val('')


    $('#addContact').modal('hide');
    return false;
  })
    
})