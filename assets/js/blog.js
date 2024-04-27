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

// Event listener for DOMContentLoaded
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

document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the parent post element and remove it from the DOM
            const post = button.closest('.post');
            post.remove();

            // If you want to remove the post from local storage, you can do it here
            // Retrieve existing posts from local storage
            let existingPosts = JSON.parse(localStorage.getItem('post')) || [];
            
            // Find the index of the post to be deleted
            const index = Array.from(post.parentNode.children).indexOf(post);
            
            // Remove the post from the existing posts array
            existingPosts.splice(index, 1);
            
            // Save the updated posts back to local storage
            localStorage.setItem('blogEntries', JSON.stringify(existingPosts));
        });
    });
});