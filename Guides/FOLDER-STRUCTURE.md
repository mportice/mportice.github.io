# Complete Folder Structure

## 📁 Full Site Structure

```
portfolio-site/
│
├── index.html                      # Homepage (yoursite.com/)
├── logo.png                        # Your logo
├── favicon.png                     # Browser tab icon
│
├── css/
│   └── styles.css                  # All site styling
│
├── images/                         # Global images (optional - not currently used)
│
├── projects/
│   ├── index.html                  # Projects listing page (yoursite.com/projects/)
│   │
│   └── autonomous-navigation/      # Example project folder
│       ├── index.html              # Project page (yoursite.com/projects/autonomous-navigation/)
│       └── images/                 # Images for THIS project only
│           └── README.txt
│
├── blog/
│   ├── index.html                  # Blog listing page (yoursite.com/blog/)
│   │
│   └── constraint-design/          # Example blog post folder
│       ├── index.html              # Blog post (yoursite.com/blog/constraint-design/)
│       └── images/                 # Images for THIS blog post only
│           └── README.txt
│
└── contact/
    └── index.html                  # Contact page (yoursite.com/contact/)
```

## 🔗 Clean URLs - No .html!

✅ `yoursite.com/` → loads `index.html`
✅ `yoursite.com/projects/` → loads `projects/index.html`
✅ `yoursite.com/projects/my-robot/` → loads `projects/my-robot/index.html`
✅ `yoursite.com/blog/` → loads `blog/index.html`
✅ `yoursite.com/blog/my-post/` → loads `blog/my-post/index.html`
✅ `yoursite.com/contact/` → loads `contact/index.html`

## 📝 When You Add New Content

### New Blog Post:

1. Run: `python3 convert-markdown.py`
2. Choose "Blog Post"
3. Script creates:
   ```
   blog/
     my-new-post/
       ├── index.html
       └── images/
   ```
4. Add card to `blog/index.html`
5. Put images in `blog/my-new-post/images/`
6. Reference as: `<img src="images/photo.jpg">`

### New Project:

1. Run: `python3 convert-markdown.py`
2. Choose "Project"
3. Script creates:
   ```
   projects/
     my-new-project/
       ├── index.html
       └── images/
   ```
4. Add card to `projects/index.html`
5. Put images in `projects/my-new-project/images/`
6. Reference as: `<img src="images/diagram.png">`

## 🎯 Key Files to Edit

**Add new blog post card:**
- Edit: `blog/index.html`

**Add new project card:**
- Edit: `projects/index.html`

**Update contact info:**
- Edit: `contact/index.html`

**Update homepage:**
- Edit: `index.html` (root)

**Change styling:**
- Edit: `css/styles.css`

## 📸 Image Organization

Each blog post and project has its own `images/` folder:

**Good:**
```
blog/
  my-trip/
    ├── index.html
    └── images/
        ├── photo1.jpg
        ├── photo2.jpg
        └── map.png
```

**Reference in HTML:**
```html
<img src="images/photo1.jpg" alt="My trip">
```

## 🚀 GitHub Upload

When uploading to GitHub, the structure stays the same!

Just make sure:
1. All folders are uploaded
2. Each article folder has its `index.html`
3. Each article's `images/` folder is uploaded with its images

GitHub Pages will automatically serve `index.html` when someone visits a folder URL.

## 🔍 Finding Things

**Want to edit the projects listing?**
→ `projects/index.html`

**Want to edit a specific project?**
→ `projects/[project-name]/index.html`

**Want to add images to a project?**
→ Put them in `projects/[project-name]/images/`

**Want to edit the blog listing?**
→ `blog/index.html`

**Want to edit a specific blog post?**
→ `blog/[post-name]/index.html`

**Want to add images to a blog post?**
→ Put them in `blog/[post-name]/images/`

## ✨ Benefits of This Structure

✅ Clean URLs (no .html)
✅ Each article is self-contained
✅ Easy to organize and backup
✅ Simple image paths
✅ Scales to hundreds of posts
✅ Easy to share individual articles
✅ Professional-looking URLs

## 🗂️ File Count Summary

**Current files:**
- 1 homepage
- 1 projects listing
- 1 blog listing  
- 1 contact page
- 1 example project (with images folder)
- 1 example blog post (with images folder)
- 1 CSS file
- 2 image files (logo + favicon)
- Helper files (README, guides, scripts)

**As you add content, you'll have:**
- 100+ blog posts? → 100+ folders in `blog/`
- 50+ projects? → 50+ folders in `projects/`
- Each with their own `index.html` and `images/` folder

Everything stays organized!