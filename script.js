const form = document.getElementById("contactForm");
const msg = document.querySelector(".success-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  msg.textContent = "✅ Message sent successfully!";
  msg.style.opacity = "1";

  form.reset();

  setTimeout(() => {
    msg.style.opacity = "0";
  }, 3000);
});
