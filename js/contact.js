const form = document.getElementById('contactForm');
const modal = document.getElementById('feedbackModal');
const modalBox = modal.querySelector('[tabindex="-1"]');

function showModal(title, message, autoDismiss = false) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalText').textContent = message;
  modal.classList.remove('hidden');
  modalBox.focus();

  if (autoDismiss) {
    setTimeout(() => {
      closeModal();
    }, 7000);
  }
}

function closeModal() {
  modal.classList.add('hidden');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const honeypot = form.querySelector('input[name="honeypot"]');
  if (honeypot.value) {
    console.warn('Bot detected — submission blocked.');
    return;
  }

  emailjs.sendForm('service_j5u84g2', 'template_m0dqie5', form)
    .then(() => {
      showModal('Message sent!', 'Thanks for reaching out — we’ll get back to you soon.', true);
      form.reset();
    })
    .catch(() => {
      showModal('Oops...', 'Something went wrong. Please try again later.', false);
    });
});