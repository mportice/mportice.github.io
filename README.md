# Engineering & Design Portfolio

A clean, modern portfolio website showcasing engineering and design projects with an integrated blog and contact page.

## File Structure

```
portfolio-site/
├── index.html      # Main HTML structure
├── styles.css      # All styling
├── projects.js     # Project data
├── blog.js         # Blog post data
├── script.js       # Navigation and interaction logic
├── logo.png        # Your logo file
├── images/         # Folder for all your project and blog images
└── README.md       # This file
```

## Adding Images to Projects and Blog Posts

### Setting Up Images

1. Put all your images in the `images/` folder
2. Name them descriptively (e.g., `robot-arm-photo.jpg`, `circuit-board.png`)

### Using Images in Projects

In `projects.js`, add images to your content using standard HTML:

```javascript
{
    title: "Your Project",
    // ... other fields
    content: `
        <h2>Overview</h2>
        <p>Your description here...</p>
        
        <img src="images/your-project-photo.jpg" alt="Description of photo">
        
        <h2>Another Section</h2>
        <p>More content...</p>
    `
}
```

### Using Images in Blog Posts

Same approach in `blog.js`:

```javascript
{
    title: "Blog Post Title",
    date: "2025.02.20",
    content: `
        <p>Opening paragraph...</p>
        
        <img src="images/blog-diagram.png" alt="System architecture diagram">
        
        <h2>Section Heading</h2>
        <p>More content...</p>
    `
}
```

**Tip:** Images will automatically be responsive and styled to match your site!

## Adding New Projects

Open `projects.js` and add a new object to the `projects` array:

```javascript
{
    title: "Your Project Title",
    year: "2025",
    role: "Your Role",
    tech: "Technologies Used",
    description: "Short description for the project card",
    content: `
        <h2>Section Heading</h2>
        <p>Your detailed project description...</p>
        
        <img src="images/project-photo.jpg" alt="Project image">
        
        <h2>Another Section</h2>
        <ul>
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
        </ul>
    `
}
```

## Adding New Blog Posts

Open `blog.js` and add to the `blogPosts` array:

```javascript
{
    title: "Your Blog Post Title",
    date: "2025.02.20",
    content: `
        <p>Your opening paragraph...</p>
        
        <img src="images/blog-image.jpg" alt="Related image">
        
        <h2>Section Heading</h2>
        <p>More content...</p>
    `
}
```

## Updating Contact Information

Edit `index.html` and find the Contact Page section (around line 140). Update these links:

```html
<!-- Email -->
<a href="mailto:YOUR_EMAIL@example.com" class="contact-card">
    ...
    <p>YOUR_EMAIL@example.com</p>
</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/YOUR_PROFILE" ...>

<!-- GitHub -->
<a href="https://github.com/YOUR_USERNAME" ...>

<!-- Twitter -->
<a href="https://twitter.com/YOUR_USERNAME" ...>
```

Replace the placeholder URLs and text with your actual information.

## Customizing Colors

The color scheme is in `styles.css` at the top:

```css
:root {
    --bg-primary: #fafafa;        /* Main background */
    --bg-secondary: #ffffff;      /* Card backgrounds */
    --text-primary: #1a1a1a;      /* Main text */
    --text-secondary: #666666;    /* Secondary text */
    --accent: #ff7f27;            /* Orange accent color */
    --accent-dark: #e66b1a;       /* Darker orange for hovers */
    --border: #e8e8e8;            /* Border color */
}
```

## Deployment

This is a static site - deploy to:
- **GitHub Pages**: Push to repo and enable Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repo
- **Any web host**: Upload all files

No build process required!

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Tips for Managing Images

1. **Optimize before uploading**: Compress images to keep your site fast
   - Tools: TinyPNG, Squoosh, ImageOptim
   - Target: Under 500KB per image

2. **Use descriptive filenames**: `robot-gripper-closeup.jpg` not `IMG_1234.jpg`

3. **Consistent naming**: Use lowercase and hyphens (e.g., `my-project-name.jpg`)

4. **Alt text matters**: Always include descriptive alt text for accessibility

5. **Organize by project**: You can create subfolders like `images/robotics/` if you have many images

## Image Format Recommendations

- **Photos**: Use JPG (smaller file size)
- **Diagrams/Screenshots**: Use PNG (better quality for text)
- **Logos/Icons**: Use PNG or SVG
- **Avoid**: GIF (except for animations), BMP, TIFF

## Future Enhancements

Some ideas:
- Add lightbox for image viewing
- Implement image lazy loading for performance
- Add image galleries for projects
- Include video embeds
- Add downloadable PDFs (datasheets, papers, etc.)
