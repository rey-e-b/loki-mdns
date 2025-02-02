// Get all tabs and content sections
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

// Add click event to switch between tabs
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and contents
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Add active class to the clicked tab and the corresponding content
    tab.classList.add('active');
    const target = document.getElementById(tab.dataset.target);
    target.classList.add('active');
  });
});

// Toggle dark mode
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

