# Engineering & Design Portfolio

A clean, modern portfolio website showcasing engineering and design projects with an integrated blog.

## File Structure

```
portfolio-site/
├── index.html      # Main HTML structure
├── styles.css      # All styling
├── projects.js     # Project data
├── blog.js         # Blog post data
├── script.js       # Navigation and interaction logic
└── README.md       # This file
```

## Adding New Projects

To add a new project, open `projects.js` and add a new object to the `projects` array:

```javascript
{
    title: "Your Project Title",
    year: "2025",
    role: "Your Role",
    tech: "Technologies Used",
    description: "Short description for the project card",
    content: `
        <h2>Section Heading</h2>
        <p>Your detailed project description here...</p>
        
        <h2>Another Section</h2>
        <ul>
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
        </ul>
    `
}
```

The `content` field supports HTML, so you can use:
- `<h2>` for section headings
- `<p>` for paragraphs
- `<ul>` and `<li>` for bullet lists
- Standard HTML formatting

## Adding New Blog Posts

To add a new blog post, open `blog.js` and add a new object to the `blogPosts` array:

```javascript
{
    title: "Your Blog Post Title",
    date: "2025.02.20",
    content: `
        <p>Your opening paragraph...</p>
        
        <h2>Section Heading</h2>
        <p>More content...</p>
    `
}
```

## Customizing Colors

The color scheme is defined in `styles.css` at the top using CSS variables:

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

## Replacing the Logo

The logo is currently embedded as base64 in `index.html`. To use your own logo:

1. Save your logo image file in the same directory
2. In `index.html`, find the `<img src="data:image/png;base64...` line
3. Replace it with: `<img src="your-logo-filename.png" alt="Your Name">`

## Deployment

This is a static site, so you can deploy it to:
- **GitHub Pages**: Just push to a repo and enable Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repo
- **Any web host**: Upload all files to your server

No build process or server required!

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Tips for Long-Term Maintenance

1. **Keep projects organized**: Add new projects to the top of the array in `projects.js` so they appear first
2. **Consistent formatting**: Follow the same HTML structure in project `content` fields
3. **Image placeholders**: The numbered placeholders (01, 02, etc.) can be replaced with actual images by modifying the project card generation in `script.js`
4. **Regular backups**: Keep your `projects.js` and `blog.js` files backed up since they contain all your content

## Future Enhancements

Some ideas for expanding the site:
- Add real project images instead of placeholders
- Implement tags/categories for projects
- Add a contact form
- Include social media links
- Add smooth scroll animations
- Implement search functionality
