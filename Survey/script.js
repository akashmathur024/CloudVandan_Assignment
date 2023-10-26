document.addEventListener("DOMContentLoaded", function() {
  const surveyForm = document.getElementById("surveyForm");
  const popup = document.getElementById("popup");
  const resetButton = document.getElementById("reset-button");
  const genderCheckboxes = document.querySelectorAll('input[name="gender"]');

  surveyForm.addEventListener("submit", function(e) {
    const checkedGenderCheckboxes = Array.from(genderCheckboxes).filter(checkbox => checkbox.checked);

    if (checkedGenderCheckboxes.length === 0) {
      e.preventDefault();
      alert("Please select your gender.");
    } else {
      e.preventDefault(); 
      const formData = new FormData(surveyForm);
      let popupContent = "<h2>Survey Results</h2";

      for (const [key, value] of formData.entries()) {
        popupContent += `<div><strong>${key}:</strong> ${value}</div>`;
      }

      popupContent += '<button class="glow-on-hover popup-close" onclick="closePopup()">Close</button>';

      popup.innerHTML = popupContent;
      popup.style.display = "block";
      popup.classList.add("popup-content");
    }
  });

  resetButton.addEventListener("click", function() {
    popup.style.display = "none"; 
  });

  genderCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        genderCheckboxes.forEach(cb => {
          if (cb !== this) {
            cb.checked = false;
          }
        });
      }
    });
  });

  function closePopup() {
    popup.style.display = "none";
  }
});
