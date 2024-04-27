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

// Save blog entries to localStorage
function saveBlogEntries(entries) {
    localStorage.setItem('blogEntries', JSON.stringify(entries));
}

document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');

    blogForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const blogTitle = document.getElementById('blogTitle').value;
        const blogContent = document.getElementById('blogContent').value;

        

        const blogPost = { username, blogTitle, blogContent };
        let existingPosts = getBlogEntries();
        existingPosts.push(blogPost);
        saveBlogEntries(existingPosts);

        blogForm.reset();
        window.location.href = 'blog.html';
    });

    displayEntries();
});