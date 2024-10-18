// script.ts

// Get all toggle buttons
const toggleButtons = document.querySelectorAll<HTMLButtonElement>('.toggle-btn');

// Add click event listeners to each button
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the next sibling which is the content paragraph
        const content = button.nextElementSibling as HTMLElement;

        // Toggle visibility of the content
        if (content) {
            content.style.display = content.style.display === "none" || content.style.display === "" ? "block" : "none";
        }
    });
});

// Initially hide all content for sections
const contents = document.querySelectorAll<HTMLElement>('.content');
contents.forEach(content => {
    content.style.display = "none"; // Hide all content by default
});
