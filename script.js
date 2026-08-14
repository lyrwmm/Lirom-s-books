
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

function handleNewsletter(event) {
  event.preventDefault();
  showToast('תודה! ההרשמה נקלטה כהדגמה.');
  event.target.reset();
  return false;
}

function handleContact(event) {
  event.preventDefault();
  showToast('ההודעה נקלטה כהדגמה. יש לחבר שירות טפסים כדי לשלוח אותה בפועל.');
  event.target.reset();
  return false;
}
