const textArray = ["Software Engineer", "Data Analyst", "Cloud Engineer", "Project Manager"];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenWords = 1500; // Delay before starting to delete the text

const typingElement = document.querySelector(".typing-text");

function type() {
  const currentText = textArray[currentIndex];
  
  if (!isDeleting && charIndex < currentText.length) {
    // Typing the text
    typingElement.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    // Deleting the text
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(type, deletingSpeed);
  } else if (!isDeleting && charIndex === currentText.length) {
    // Start deleting after a delay
    setTimeout(() => isDeleting = true, delayBetweenWords);
    setTimeout(type, delayBetweenWords);
  } else if (isDeleting && charIndex === 0) {
    // Move to the next word
    isDeleting = false;
    currentIndex = (currentIndex + 1) % textArray.length;
    setTimeout(type, typingSpeed);
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", type);
