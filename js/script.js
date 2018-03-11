(function($){
  $(function() {
    $('.icon').on('click', function() {
      $(this).closest('.icon').toggleClass('icon_state_open');
      $(this).siblings('.nav').toggleClass('nav_state_open');
    });
  });
})(jQuery);