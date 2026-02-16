# File Map - What Each index.html Is

When you download/view files, here's what each `index.html` actually is:

## Root Level

**File:** `index.html`
**What it is:** Homepage / Landing page
**URL:** `yoursite.com/`

## Main Pages

**File:** `projects/index.html`
**What it is:** Projects listing page (shows all your projects)
**URL:** `yoursite.com/projects/`

**File:** `blog/index.html`
**What it is:** Blog listing page (shows all your blog posts)
**URL:** `yoursite.com/blog/`

**File:** `contact/index.html`
**What it is:** Contact page (About Me + contact links)
**URL:** `yoursite.com/contact/`

## Individual Projects

**File:** `projects/autonomous-navigation/index.html`
**What it is:** Autonomous Navigation project detail page
**URL:** `yoursite.com/projects/autonomous-navigation/`

**File:** `projects/my-robot/index.html` (when you create it)
**What it is:** My Robot project detail page
**URL:** `yoursite.com/projects/my-robot/`

## Individual Blog Posts

**File:** `blog/constraint-design/index.html`
**What it is:** "The Art of Constraint-Driven Design" blog post
**URL:** `yoursite.com/blog/constraint-design/`

**File:** `blog/my-new-post/index.html` (when you create it)
**What it is:** Your new blog post
**URL:** `yoursite.com/blog/my-new-post/`

---

## 💡 Quick Tip

The **folder name** tells you what the page is about:
- Folder: `projects/` → Projects listing
- Folder: `blog/constraint-design/` → Blog post about constraint design
- Folder: `contact/` → Contact page

The `index.html` inside each folder is just the default filename that browsers load automatically.

## 🔍 Finding Things

**Need to edit the projects listing?**
→ Look for: `projects/index.html`

**Need to edit a specific project?**
→ Look for: `projects/[project-name]/index.html`

**Need to edit the blog listing?**
→ Look for: `blog/index.html`

**Need to edit a specific blog post?**
→ Look for: `blog/[post-name]/index.html`

The folder structure tells you what you're editing!

## 📂 In Your File Browser

When you see:
```
projects/
  ├── index.html          ← This is the LISTING page
  └── my-robot/
      └── index.html      ← This is the MY ROBOT detail page
```

The parent folder (`projects/` vs `my-robot/`) tells you what it is!