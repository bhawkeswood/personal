$( init );

function init() {
  $('.canDrag').draggable( {
    containment: '#content',
    stack: '.canDrag',
  });

}
