const form = document.getElementById('contactForm');
const modal = document.getElementById('feedbackModal');
const modalBox = modal.querySelector('[tabindex="-1"]');

function showModal(title, message, autoDismiss = false, type = 'success') {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalText').textContent = message;
  modal.classList.remove('hidden');
  modalBox.classList.add('show');
  modalBox.focus();

  const icon = document.getElementById('modalIcon');
  icon.classList.remove('show');

  if (type === 'success') {
    icon.setAttribute('class', 'w-12 h-12 text-green-500 transform scale-90 opacity-0 transition-all duration-500 ease-out');
    icon.innerHTML = `
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-opacity="0.2" />
      <path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
    `;
  } else {
    icon.setAttribute('class', 'w-12 h-12 text-red-500 transform scale-90 opacity-0 transition-all duration-500 ease-out');
    icon.innerHTML = `
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-opacity="0.2" />
      <line x1="9" y1="9" x2="15" y2="15" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="15" y1="9" x2="9" y2="15" stroke-linecap="round" stroke-linejoin="round" />
    `;
  }

  icon.classList.add('show');

  if (autoDismiss) {
    setTimeout(() => {
      closeModal();
    }, 10000);
  }
}

function closeModal() {
  modalBox.classList.remove('show');
  modal.classList.add('modal-fade-out');
  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('modal-fade-out');
  }, 500); // match your CSS fade-out duration
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
      showModal('Message sent!', 'Thanks for reaching out — your words matter. We’ll get back to you soon.', true, 'success');
      form.reset();
    })
    .catch(() => {
      showModal('Oops...', 'Something went wrong. Please try again later.', false, 'error');
    });
});
