// Dark mode toggle
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.querySelector('i').classList.toggle('fa-sun');
  toggle.querySelector('i').classList.toggle('fa-moon');
});

// Animated typing effect
const typingEl = document.querySelector('.typing');
const titles = [
  "WordPress Developer",
  "Web Developer",
  "Software Tester",
  "Web Tester",
  "Mobile App Tester (Manual & Automation)",
  "AI Engineer",
  "IT Support Engineer"
];
let idx = 0, charIdx = 0, isDeleting = false, delay = 200;

function type() {
  const current = titles[idx];
  if (isDeleting) {
    typingEl.textContent = current.slice(0, charIdx--);
  } else {
    typingEl.textContent = current.slice(0, charIdx++);
  }

  if (!isDeleting && charIdx === current.length) {
    isDeleting = true;
    delay = 1000;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    idx = (idx + 1) % titles.length;
    delay = 500;
  } else {
    delay = isDeleting ? 100 : 150;
  }

  setTimeout(type, delay);
}

document.addEventListener('DOMContentLoaded', type);
