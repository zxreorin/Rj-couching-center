const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Scroll to form
function submitForm() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let studentClass = document.getElementById("class").value;

  if (name === "" || phone === "" || studentClass === "") {
    document.getElementById("message").innerText = "Please fill all details!";
  } else {
    document.getElementById("message").innerText = "✅ Form submitted successfully!";
  }
}
function sendToWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let studentClass = document.getElementById("class").value;

  if (name === "" || phone === "" || studentClass === "") {
    alert("Please fill all details!");
    return;
  }

  let message = 
    "New Admission Request:%0A" +
    "Name: " + name + "%0A" +
    "Phone: " + phone + "%0A" +
    "Class: " + studentClass;

  let whatsappNumber = "917676433753"; // your number

  let url = "https://wa.me/" + whatsappNumber + "?text=" + message;

  window.open(url, "_blank");
}
