// Smooth scroll effect for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Highlight active section in navbar while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Dark / Light mode toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "50%";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.background = "#00e6e6";
toggleBtn.style.color = "#000";
toggleBtn.style.fontSize = "18px";
document.body.appendChild(toggleBtn);

let darkMode = true;
toggleBtn.addEventListener("click", () => {
  if (darkMode) {
    document.body.style.background = "#f4f4f4";
    document.body.style.color = "#222";
    toggleBtn.textContent = "☀️";
  } else {
    document.body.style.background = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
    document.body.style.color = "#fff";
    toggleBtn.textContent = "🌙";
  }
  darkMode = !darkMode;
});

// Form submission alert
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    alert("Thank you for contacting me! Your message has been sent.");
  });
}
