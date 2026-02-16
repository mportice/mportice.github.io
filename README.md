# Lines and Layers Portfolio

Multi-page portfolio with proper folder structure for scalability!

## 📁 Folder Structure

```
portfolio-site/
├── index.html           # Homepage
├── projects.html        # Projects listing  
├── blog.html           # Blog listing
├── contact.html        # Contact page
├── logo.png            # Your logo
├── css/
│   └── styles.css      # All styling
├── images/             # Put all images here
├── projects/           # Individual project pages
│   └── autonomous-navigation.html
└── blog/               # Individual blog posts
    └── constraint-design.html
```

## 🚀 GitHub Upload Instructions

**To upload with folders intact:**

1. **Via GitHub Web:**
   - Go to your repo
   - Click "Add file" → "Upload files"
   - Drag the ENTIRE `portfolio-site` folder
   - GitHub will preserve the folder structure!

2. **Via Command Line:**
   ```bash
   git add .
   git commit -m "Add portfolio site"
   git push
   ```

3. **Enable GitHub Pages:**
   - Settings → Pages
   - Source: main branch
   - Folder: / (root)
   - Save!

## ✨ What's New - Brand Name in Nav

The nav bar now shows:
- **Logo** (left side) - also appears as favicon in browser tabs!
- **"Lines and Layers"** brand name (styled with orange accent line)
- **Nav links** (right side: Home, Projects, Blog, Contact)

On mobile, the brand name hides to save space.

## 🔗 Links in Content Are Styled

Links **only in project and blog content** are styled:
- Orange color (`--accent`)
- Underline on hover
- Smooth transition

Example:
```html
<p>Check out <a href="https://example.com">this resource</a> for more info.</p>
```

## 📝 Adding New Projects

1. **Copy template:** Duplicate `projects/autonomous-navigation.html`
2. **Rename:** `projects/my-new-project.html`
3. **Edit content:** Update title, meta, content
4. **Add to listing:** In `projects.html`:

```html
<a href="projects/my-new-project.html" class="project-card">
    <div class="project-image">02</div>
    <div class="project-info">
        <h3>My New Project</h3>
        <p>Description here</p>
    </div>
</a>
```

## 📰 Adding New Blog Posts

1. **Copy template:** Duplicate `blog/constraint-design.html`
2. **Rename:** `blog/my-new-post.html`
3. **Edit content**
4. **Add to listing:** In `blog.html`:

```html
<a href="blog/my-new-post.html" class="blog-post">
    <div class="blog-date">2025.02.20</div>
    <h3>My Post Title</h3>
    <p>Brief excerpt...</p>
</a>
```

## 📸 Adding Images

**In main pages (index, projects, blog, contact):**
```html
<img src="images/my-photo.jpg" alt="Description">
```

**In project pages (projects/ folder):**
```html
<img src="../images/my-photo.jpg" alt="Description">
```

**In blog posts (blog/ folder):**
```html
<img src="../images/my-photo.jpg" alt="Description">
```

Put all images in the `images/` folder!

## 🎨 Updating Contact Info

Edit `contact.html`:
- Email href and text
- LinkedIn URL
- GitHub URL  
- Twitter URL

## 🔍 SEO Benefits

✅ Each page has unique URL  
✅ Google indexes everything  
✅ Shareable links work  
✅ Social media previews  
✅ Browser history works

## 📱 All Responsive

The site adapts perfectly to:
- Desktop (1920px+)
- Tablet (768px-1024px)
- Mobile (< 768px)

## 🎯 Scaling Up

**10+ projects?** Keep adding to `projects/` folder  
**50+ blog posts?** Consider sub-folders: `blog/2025/post-name.html`  
**Categories?** Create `projects-robotics.html`, `projects-iot.html` etc.

The folder structure handles growth beautifully!

## ⚡ Quick Tips

- Optimize images before uploading (< 500KB each)
- Use JPG for photos, PNG for diagrams
- Keep filenames descriptive: `robot-arm-closeup.jpg` not `IMG_1234.jpg`
- Each page needs unique title and meta description for SEO
- Links in content are automatically styled (orange, hover underline)

## 🔧 Customization

**Colors:** Edit CSS variables in `css/styles.css`  
**Fonts:** Change font imports in HTML `<head>` sections  
**Brand name:** Search for "Lines and Layers" and replace

That's it! Upload to GitHub and you're live!