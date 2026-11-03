// STEPTECH setup: replace these placeholders with your real contact details.
const WHATSAPP_NUMBER = "254119440682"; // Kenya format: 254 followed by your number, no + or spaces.
const BUSINESS_EMAIL = "steptech.digital@gmail.com"; // Replace with an email address you control.

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("emailDisplay").textContent = BUSINESS_EMAIL;

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("service").value = link.dataset.service;
  });
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Before using the contact form, add your WhatsApp number in script.js. Use Kenya format, for example 2547XXXXXXXX, without + or spaces.");
    return;
  }

  const form = new FormData(event.currentTarget);
  const name = form.get("name").trim();
  const email = form.get("email").trim() || "Not provided";
  const service = form.get("service");
  const message = form.get("message").trim();

  const whatsappMessage =
    `Hello STEPTECH!%0A%0A` +
    `My name: ${encodeURIComponent(name)}%0A` +
    `My email: ${encodeURIComponent(email)}%0A` +
    `Service: ${encodeURIComponent(service)}%0A` +
    `Project details: ${encodeURIComponent(message)}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
});
