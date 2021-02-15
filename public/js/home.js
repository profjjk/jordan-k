$(document).ready(() => {

  $('#life').on('click', event => {
    event.preventDefault();
    window.location.pathname = ('/life/');
  })
  $('#work').on('click', event => {
    event.preventDefault();
    window.location.pathname = ('/work/');
  })
  $('#blog').on('click', event => {
    event.preventDefault();
    window.location.pathname = ('/blog/');
  })
})