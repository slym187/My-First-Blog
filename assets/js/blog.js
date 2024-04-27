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
        // Create a card to hold each blog entry
        const card = document.createElement('div');
        card.classList.add('card');

        // Create HTML elements for blog entry content
        const entryContent = document.createElement('div');
        entryContent.classList.add('entry-content');
        entryContent.innerHTML = `
            <h2>${post.blogTitle}</h2>
            <p>${post.blogContent}</p>
            <p>Author: ${post.username}</p>
            <hr>
        `;

        // Create a delete button for each entry
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';

        // Add event listener to delete button
        deleteButton.addEventListener('click', function() {
            // Remove the card containing the blog entry
            card.remove();

            // Retrieve existing posts from local storage
            let existingPosts = JSON.parse(localStorage.getItem('blogEntries')) || [];

            // Find the index of the post to be deleted
            const index = entries.indexOf(post);

            // Remove the post from the existing posts array
            existingPosts.splice(index, 1);

            // Save the updated posts back to local storage
            localStorage.setItem('blogEntries', JSON.stringify(existingPosts));
        });

        // Append entry content and delete button to the card
        card.appendChild(entryContent);
        card.appendChild(deleteButton);

        // Append the card to the blog entries section
        blogEntriesSection.appendChild(card);
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


