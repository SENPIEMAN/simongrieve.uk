let posts = [];

fetch('/blog/search.json')
    .then(response => response.json())
    .then(data => {
        posts = data;
    });

const input = document.getElementById('search-input');
const results = document.getElementById('search-results');

input.addEventListener('input', () => {

    const query = input.value.toLowerCase().trim();

    results.innerHTML = '';

    if (!query) return;

    const matches = posts.filter(post => {

        const title = post.title.toLowerCase();
        const description = post.description.toLowerCase();
        const tags = post.tags.join(' ').toLowerCase();

        return title.includes(query)
            || description.includes(query)
            || tags.includes(query);

    });

    if (matches.length === 0) {

        results.innerHTML =
            '<p>No posts found. I\'ve probably not written anything about that yet.</p>';

        return;
    }

    matches.forEach(post => {

        const card = document.createElement('article');

        card.className = 'card';

        card.innerHTML = `
            <h3>
                <a href="${post.url}">
                    ${post.title}
                </a>
            </h3>

            <p>${post.description}</p>
            <small>Posted: ${post.date}</small> 
        
        `;

        results.appendChild(card);

    });

});