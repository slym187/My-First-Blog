document.addEventListener('DOMContentLoaded', function() {
    const toggleModeButton = document.getElementById('toggleMode');
    const backButton = document.getElementById('backButton');

    toggleModeButton.addEventListener('click', function() {
        // Implement logic to toggle between light and dark mode
        document.body.classList.toggle('dark-mode');
    });

    backButton.addEventListener('click', function() {
        // Implement logic to go back to the landing page
        window.location.href = 'index.html'; // Replace 'index.html' with the actual URL of your landing page
    });

    // Call the displayEntries function to display blog entries
    displayEntries();
});

// Retrieve post from local storage
function getBlogEntries() {
    const entries = JSON.parse(localStorage.getItem('blogEntries')) || [];
    return entries;
}

// Display entries
function displayEntries() {
    const blogEntriesSection = document.getElementById('blog-entries');
    const entries = getBlogEntries();

    // Loop through entries and create HTML elements
    entries.forEach((post) => {
        const article = document.createElement('article');
        article.classList.add('blog-entries');
        article.innerHTML = `
            <h2>${post.blogTitle}</h2>
            <p>${post.blogContent}</p>
            <p>Author: ${post.username}</p>
            <hr>
        `;
        // Append article to the blog entries section
        blogEntriesSection.appendChild(article);
    });
}
window.addEventListener('load',displayEntries);