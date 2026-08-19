// Appointment Button
function bookAppointment() {
  alert("Thank you! Your appointment request has been received.");
}

// Scroll Animation
const sections = document.querySelectorAll(".services, .about, .contact");

sections.forEach((section) => {
  section.classList.add("hidden");
});

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;

    if (top < triggerBottom) {
      section.classList.add("show");
    }
  });
});


function togglePrice(card) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((item) => {
    if (item !== card) {
      item.classList.remove("active");
    }
  });

  card.classList.toggle("active");
}
