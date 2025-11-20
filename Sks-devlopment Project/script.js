document.getElementById('contact-form').
addEventListener('submit', function(e) {
  e.preventDefault();

  // Simulate sending the form
  document.getElementById('form-message').textContent = "Thanks for your message!";
  this.reset();
});
