document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  // simple validation
  this.reset();
  document.getElementById('formSuccess').classList.add('show');
  
  // Hide success message after 3 seconds
  setTimeout(() => {
    document.getElementById('formSuccess').classList.remove('show');
  }, 3000);
});