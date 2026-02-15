# Multi-Page Portfolio Site

Your portfolio is now structured as separate HTML pages for full SEO support and scalability!

## 📁 File Structure

```
portfolio-site/
├── index.html          # Homepage
├── projects.html       # Projects listing  
├── blog.html          # Blog listing
├── contact.html       # Contact page
├── logo.png           # Your logo
├── css/
│   └── styles.css     # All styling
├── images/            # Put all images here
├── projects/          # Individual project pages
│   └── autonomous-navigation.html  (example)
└── blog/              # Individual blog posts
    └── constraint-driven-design.html  (example)
```

## 🚀 GitHub Pages Setup

1. Push all files to your GitHub repo
2. Go to Settings → Pages
3. Set source to "main" branch, root folder
4. Your site will be live at `https://yourusername.github.io/repo-name`

## ✅ SEO Benefits You Now Have

✓ Each page has its own URL  
✓ Google can index every project and blog post  
✓ Social media shows proper previews  
✓ Direct links work (`yoursite.com/blog/my-post.html`)  
✓ Browser history works properly  
✓ Each page has custom meta descriptions

## 📝 Adding New Projects

### Step 1: Copy the template
Copy `projects/autonomous-navigation.html` and rename it (e.g., `my-new-project.html`)

### Step 2: Update the content
Edit these sections in your new file:
- `<title>` tag
- `<meta name="description">` tag  
- `<h1>` (project title)
- Project metadata (year, role, tech)
- All content in `.project-content`

### Step 3: Add to projects.html
Add a card linking to your new project:

```html
<a href="projects/my-new-project.html" class="project-card">
    <div class="project-image">07</div>
    <div class="project-info">
        <h3>My New Project</h3>
        <p>Short description here</p>
    </div>
</a>
```

### Adding Images to Projects

```html
<!-- In the project HTML file -->
<img src="../images/my-robot.jpg" alt="Description">
```

Put images in the `/images` folder and reference with `../images/filename.jpg`

## 📰 Adding New Blog Posts

### Step 1: Copy the template
Copy `blog/constraint-driven-design.html` and rename it

### Step 2: Update the content
Edit:
- `<title>` and `<meta>` tags
- `<h1>` (blog title)
- Date
- All content in `.blog-detail-content`

### Step 3: Add to blog.html
Add a card:

```html
<a href="blog/my-new-post.html" class="blog-post">
    <div class="blog-date">2025.02.20</div>
    <h3>My Post Title</h3>
    <p>Brief excerpt...</p>
</a>
```

### Adding Images to Blog Posts

```html
<img src="../images/diagram.png" alt="System diagram">
```

## 🎨 Customizing Contact Info

Edit `contact.html` and update:
- Email link and text
- LinkedIn URL
- GitHub URL  
- Twitter URL

## 📸 Managing Images

1. Put all images in `/images` folder
2. Optimize before uploading (use TinyPNG, etc.)
3. Use descriptive names: `robot-arm-closeup.jpg` not `IMG_1234.jpg`
4. Reference from project pages: `../images/filename.jpg`
5. Reference from main pages: `images/filename.jpg`

## 🎯 Tips for Scale

### When you have 10+ projects:
Consider organizing: `projects/robotics/project1.html`

### When you have 50+ blog posts:
Add a year: `blog/2025/my-post.html`  
Update links in `blog.html` accordingly

### Want categories/tags?
Create separate listing pages:  
- `projects-robotics.html`
- `projects-iot.html`  
- `blog-tutorials.html`

## ⚡ Performance Tips

1. **Compress images**: Under 500KB each
2. **Use JPG for photos**, PNG for diagrams
3. **Add lazy loading**: `<img loading="lazy" ...>`
4. **Minify CSS** when you have lots of content

## 🔍 SEO Checklist

For each new page, make sure you:
- [ ] Update `<title>` tag (unique for each page)
- [ ] Update `<meta name="description">` (155 chars max)
- [ ] Use proper heading hierarchy (h1 → h2 → h3)
- [ ] Add alt text to all images
- [ ] Use descriptive filenames (not page1.html)

## 🆚 Old vs New Structure

**Old (single page):**
- ❌ No SEO
- ❌ Can't share specific projects
- ❌ Everything loads at once

**New (multi-page):**
- ✅ Full SEO
- ✅ Shareable URLs
- ✅ Fast page loads
- ✅ Scales to 100s of posts

## 🔧 Common Tasks

**Change colors:**
Edit `css/styles.css`, top section (CSS variables)

**Change fonts:**
Edit font imports in `<head>` of each page

**Add new main page:**
1. Create `newpage.html`
2. Add nav link to all existing pages
3. Copy nav structure from any page

## 📱 Mobile Friendly

Everything is fully responsive! Test on:
- Desktop (1920px+)
- Tablet (768px)
- Phone (375px)

## Need Help?

The structure is simple:
- Main pages (index, projects, blog, contact) = top level
- Individual posts = in subfolders
- All share same CSS = `css/styles.css`
- All images = `images/` folder

Just copy templates and update the content!
