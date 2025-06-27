// Slider Functionality
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideContainer = document.querySelector(".slides");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function showSlide(index) {
  const totalSlides = slides.length;
  slideIndex = (index + totalSlides) % totalSlides;
  const offset = -slideIndex * 100;
  slideContainer.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener("click", () => showSlide(slideIndex + 1));
prevBtn.addEventListener("click", () => showSlide(slideIndex - 1));

// Auto slide every 6 seconds
setInterval(() => showSlide(slideIndex + 1), 6000);

// FAQ Toggle and Message Display
const faqItems = document.querySelectorAll(".faq-item");
const faqMessageEl = document.getElementById("faq-message");

const faqMessages = {
  "Can I book a reservation online?": "You can reserve a table easily on our website or call us anytime.",
  "Are your services available 24/7?": "We operate extended hours, including weekends and holidays.",
  "Do you offer delivery services?": "Delivery available with fees based on your location.",
  "Do you cater for events?": "Yes, we provide tailored catering services for all special occasions."
};

function toggleFAQ(item) {
  const answer = item.nextElementSibling;
  const icon = item.querySelector(".faq-icon");

  const isOpen = answer.classList.contains("active");

  // Close all
  document.querySelectorAll(".faq-answer").forEach((ans) => ans.classList.remove("active"));
  document.querySelectorAll(".faq-icon").forEach((ico) => (ico.textContent = "+"));

  if (!isOpen) {
    answer.classList.add("active");
    icon.textContent = "−";

    // Show corresponding message
    const question = item.querySelector(".faq-question").textContent;
    const message = faqMessages[question];
    if (message) {
      faqMessageEl.textContent = message;
      faqMessageEl.classList.add("active");
    }
  } else {
    faqMessageEl.textContent = "";
  }
}

// Add click and keyboard handlers for accessibility
faqItems.forEach(item => {
  item.addEventListener("click", () => toggleFAQ(item));
  item.addEventListener("keydown", (e) => {
    if (["Enter", " ", "Spacebar"].includes(e.key)) {
      e.preventDefault();
      toggleFAQ(item);
    }
  });
});

// Dining Experience Interactive Info
const diningButtons = document.querySelectorAll(".dining-btn");
const diningInfo = document.getElementById("dining-info");

diningButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const info = btn.getAttribute("data-info");
    diningInfo.textContent = info;

    // Highlight selected button
    diningButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("searchInput");

  searchButton.addEventListener("click", searchSite);

  function searchSite() {
    const query = searchInput.value.toLowerCase().trim();
    const sections = document.querySelectorAll("section");

    let found = false;

    sections.forEach(section => {
      const text = section.innerText.toLowerCase();
      if (text.includes(query)) {
        section.scrollIntoView({ behavior: 'smooth' });
        found = true;
      }
    });

    if (!found) {
      alert("No matching content found.");
    }
  }
});
