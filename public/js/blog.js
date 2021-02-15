$(document).ready(() => {
  $('#home').on('click', event => {
    event.preventDefault();
    window.location.pathname = ('/');
  })
  $('#work').on('click', event => {
    event.preventDefault();
    window.location.pathname = ('/work/');
  })
})