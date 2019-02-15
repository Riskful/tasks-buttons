$(function () {

   const group = $('.btn-group-vertical');

   group.click(function () {
       const first = group.find('.btn:first-child');

       $(this).append(first.clone());
       first.remove();
   });


});