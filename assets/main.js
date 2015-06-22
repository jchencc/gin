$(function() {
  var tpl = _.template($('#tpl-list').html());

  $.getJSON('work.json')
    .success(function(data) {
      console.log(data);
      $('#list').html(tpl({list: data}));
    });
});
