document.addEventListener("DOMContentLoaded", function () {
    updateSkills("all");
});

function toggleFilter(category, button) {
    let buttons = document.querySelectorAll(".filter-buttons button");

    // Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));

    // Add 'active' class only to the clicked button
    button.classList.add("active");

    updateSkills(category);
}

function updateSkills(category) {
    let skills = document.querySelectorAll(".skill-item");

    skills.forEach(skill => {
        skill.style.display = (category === "all" || skill.classList.contains(category)) ? "inline-block" : "none";
    });
}

