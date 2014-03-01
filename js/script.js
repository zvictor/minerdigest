$(document).ready(function() {

  var jobCount = $('#list .in').length;
  $('.list-count').text(jobCount + ' people');

  $("#search-text").keydown(function () {
    if(event.keyCode == 32 /*space*/ || event.keyCode == 9 /*tab*/) {
      $("#filter").append("<li>"+$("#search-text").val()+"</li>");
      $("#search-text").val("");
    }
    return true;
  });
  
  $("#search-text").keyup(function () {
     //$(this).addClass('hidden');

    var searchTerm = $("#search-text").val();

    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    //debugger;

      //extends :contains to be case insensitive
  $.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
    
    
    $("#list li").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).addClass('hiding out').removeClass('in');
      setTimeout(function() {
          $('.out').addClass('hidden');
        }, 300);
    });
    
    $("#list li:containsi('" + searchSplit + "')").each(function(e) {
      $(this).removeClass('hidden out').addClass('in');
      setTimeout(function() {
          $('.in').removeClass('hiding');
        }, 1);
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







