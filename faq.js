function toggleFAQ(item) {
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-icon');

  if (answer.style.display === "block") {
    answer.style.display = "none";
    icon.textContent = "+";
  } else {
    answer.style.display = "block";
    icon.textContent = "−";
  }
}

