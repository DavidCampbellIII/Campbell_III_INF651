document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const outputDiv = document.getElementById("outputDiv");
  const mouseTracker = document.getElementById("mouseTracker");
  const coordinatesDiv = document.getElementById("coordinates");
  const form = document.getElementById("nameForm");

  function handleSubmit() {
    const name = nameInput.value.trim();
    if (name.length === 0) {
      outputDiv.textContent = "Error: Please enter a name.";
      outputDiv.style.color = "red";
      outputDiv.style.backgroundColor = "";
    } else {
      outputDiv.textContent = `Welcome, ${name}!`;
      outputDiv.style.color = "black";
      outputDiv.style.backgroundColor = "green";
    }
  }

  nameInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && nameInput.value.trim().length > 0) {
      e.preventDefault();
      handleSubmit();
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    handleSubmit();
  });

  mouseTracker.addEventListener("mousemove", function (e) {
    const rect = mouseTracker.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);
    coordinatesDiv.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
  });

  mouseTracker.addEventListener("mouseleave", function () {
    coordinatesDiv.textContent = "Mouse Coordinates: X: 0, Y: 0";
  });
});
