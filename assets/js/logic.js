document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');

    blogForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get values from form inputs
        const username = document.getElementById('username').value;
        const blogTitle = document.getElementById('blogTitle').value;
        const blogContent = document.getElementById('blogContent').value;

        // Check if any field is empty
        if (!username || !blogTitle || !blogContent) {
            alert('Please complete all fields in the form.');
            return;
        }

        // Create blog post object
        const blogPost = { username, blogTitle, blogContent };

        // Retrieve existing posts from localStorage
        let existingPosts = JSON.parse(localStorage.getItem('blogEntries')) || [];

        // Add new blog post to existing posts
        existingPosts.push(blogPost);

        // Save updated posts back to localStorage
        function saveBlogEntries(existingPosts) {
            localStorage.setItem('blogEntries', JSON.stringify(existingPosts));
        }

        // Clear form fields
        blogForm.reset();

        // Redirect to the blog page
        window.location.href="blog.html";
    });
});


