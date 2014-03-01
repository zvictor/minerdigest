$(document).ready(function() {

  var jobCount = $('#list .in').length;
  $('.list-count').text(jobCount + ' people');

  $("#search-text").keydown(function () {
    if(event.keyCode == 32 /*space*/ || event.keyCode == 9 /*tab*/) {
      var newFilter = $("<li>"+$("#search-text").val()+"</li>").click(function(){
        $(this).remove();
        $("#search-text").trigger('keyup');
      });
      if($("#search-text").val())
        $("#filter").append(newFilter);
      $("#search-text").val("");
      return false;
    }
    return true;
  });
  
  $("#search-text").keyup(function () {
    var searchTerms = $("#filter>li").map(function(){
        return $(this).html();
    });
    searchTerms.push($("#search-text").val());

    $("#list>li").each(function(){
      var person = $(this);
      var contains = _.every(searchTerms, function(term){
        return person.data("cv").match(new RegExp(term, "i"));
      });

      if(contains){
        $(this).removeClass('hidden out').addClass('in');
        setTimeout(function() {
          $('.in').removeClass('hiding');
        }, 1);
      } else {
        $(this).addClass('hiding out').removeClass('in');
        setTimeout(function() {
          $('.out').addClass('hidden');
        }, 300);
      }
    });

    var jobCount = $('#list .in').length;
    $('.list-count').text(jobCount + ' people');
    
    //shows empty state text when no jobs found
    if(jobCount == '0') {
      $('#list').addClass('empty');
    }
    else {
      $('#list').removeClass('empty');
    }
    
  });

});

$(document).ready(function() {
  $('#list>li').click(function(){
    $(this).toggleClass('expanded');
  });
});




