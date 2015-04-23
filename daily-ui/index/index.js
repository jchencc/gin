$(document).ready(function() {
  $.get('/data/daily-ui.json')
    .success(function(data) {
      var $list = $('#list'),
          h = [];
      data.forEach(function(item) {
        h.push('<li><a href="', item.link, '">', item.name, '</a></li>');
      });
      $list.html(h.join(''));
      console.log(data);
    });
});