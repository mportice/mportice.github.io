// Navigation functions
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function showProject(index) {
    const project = projects[index];
    const content = `
        <div class="project-detail-header">
            <h1>${project.title}</h1>
            <div class="project-meta">
                <div class="project-meta-item">
                    <span class="project-meta-label">Year</span>
                    <span>${project.year}</span>
                </div>
                <div class="project-meta-item">
                    <span class="project-meta-label">Role</span>
                    <span>${project.role}</span>
                </div>
                <div class="project-meta-item">
                    <span class="project-meta-label">Tech</span>
                    <span>${project.tech}</span>
                </div>
            </div>
            <p style="font-size: 1.2rem; color: var(--text-secondary); line-height: 1.8;">${project.description}</p>
        </div>
        <div class="project-detail-image">${String(index + 1).padStart(2, '0')}</div>
        <div class="project-content">
            ${project.content}
        </div>
    `;
    
    document.getElementById('project-detail-content').innerHTML = content;
    document.getElementById('projects').classList.remove('active');
    document.getElementById('project-detail').classList.add('active');
    window.scrollTo(0, 0);
}

function showBlogPost(index) {
    const post = blogPosts[index];
    const content = `
        <div class="blog-detail-header">
            <div class="blog-date">${post.date}</div>
            <h1>${post.title}</h1>
        </div>
        <div class="blog-detail-content">
            ${post.content}
        </div>
    `;
    
    document.getElementById('blog-detail-content').innerHTML = content;
    document.getElementById('blog').classList.remove('active');
    document.getElementById('blog-detail').classList.add('active');
    window.scrollTo(0, 0);
}

// Render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="project-card" onclick="showProject(${index})">
            <div class="project-image">${String(index + 1).padStart(2, '0')}</div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        </div>
    `).join('');
}

// Render blog posts
function renderBlogPosts() {
    const blogGrid = document.getElementById('blog-grid');
    blogGrid.innerHTML = blogPosts.map((post, index) => `
        <div class="blog-post" onclick="showBlogPost(${index})">
            <div class="blog-date">${post.date}</div>
            <h3>${post.title}</h3>
            <p>${post.content.substring(3, post.content.indexOf('</p>')).substring(0, 200)}...</p>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderBlogPosts();
});
