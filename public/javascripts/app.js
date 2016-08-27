import $ from 'jquery';

$(document).ready(function() {
  $('select').material_select();

	$('#material-icon').click(function() {
    $('#display_advance').toggle('1000');
    $("i", this).toggleClass("favorite favorite_border");

  });
});

export default app;