// script.ts
// Get all toggle buttons
var toggleButtons = document.querySelectorAll('.toggle-btn');
// Add click event listeners to each button
toggleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Get the next sibling which is the content paragraph
        var content = button.nextElementSibling;
        // Toggle visibility of the content
        if (content) {
            content.style.display = content.style.display === "none" || content.style.display === "" ? "block" : "none";
        }
    });
});
// Initially hide all content for sections
var contents = document.querySelectorAll('.content');
contents.forEach(function (content) {
    content.style.display = "none"; // Hide all content by default
});
