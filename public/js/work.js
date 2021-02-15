$(document).ready(() => {

  $('#life').on('click', event => {
    event.preventDefault();
    window.location.pathname = ('/life/');
  })
  $('#blog').on('click', event => {
    event.preventDefault();
    window.location.pathname = ('/blog/');
  })
})