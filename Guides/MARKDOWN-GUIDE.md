# How to Write Articles Using Markdown

This guide shows you how to write blog posts and project pages without touching HTML!

## Quick Start

1. **Open Terminal** (Mac/Linux) or **Command Prompt** (Windows)
2. **Navigate to your portfolio folder:**
   ```bash
   cd path/to/portfolio-site
   ```
3. **Run the script:**
   ```bash
   python3 convert-markdown.py
   ```

## Step-by-Step Example

### Writing a Blog Post

1. Run the script: `python3 convert-markdown.py`
2. Choose option `1` (Blog Post)
3. Enter details:
   ```
   Title: My First Blog Post
   Date: [press Enter for today]
   ```
4. **Write your content in markdown:**
   ```markdown
   This is my opening paragraph. I can write naturally!

   ## Section Heading

   Here's another paragraph with **bold text** and *italic text*.

   I can add lists:
   - Item one
   - Item two
   - Item three

   And links: Check out [this cool site](https://example.com).

   ![My photo](../images/photo.jpg)

   END
   ```
5. Type `END` on its own line when finished
6. The script creates `blog/my-first-blog-post.html`
7. It shows you the code to add to `blog.html`

## Markdown Syntax Cheat Sheet

### Headers
```markdown
# Main Section (becomes <h2>)
## Subsection (becomes <h2>)
```

### Text Formatting
```markdown
**bold text**
*italic text*
***bold and italic***
```

### Links
```markdown
[link text](https://url.com)
[another page](../projects.html)
```

### Images
```markdown
![alt text](../images/photo.jpg)
```
Images are automatically centered!

### YouTube Videos
```html
<div class="video-container">
<iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
</div>
```
Replace `VIDEO_ID` with the ID from the YouTube URL.
Example: `https://youtube.com/watch?v=dQw4w9WgXcQ` → use `dQw4w9WgXcQ`

Videos are responsive and maintain 16:9 aspect ratio!

### PDF Downloads
```html
<a href="../images/document.pdf" class="pdf-link" download>
📄 Download My Resume (PDF)
</a>
```
Put your PDF in the `images/` folder, styled as a button automatically!

### Lists

**Bullet points:**
```markdown
- First item
- Second item
- Third item
```

**Numbered lists:**
```markdown
1. First step
2. Second step
3. Third step
```

### Paragraphs
Just write normally! Blank lines create new paragraphs automatically.

## Writing a Project Page

Same process, but choose option `2`:

```
Title: My Robot Project
Year: 2024
Role: Lead Engineer
Tech Stack: Python, ROS, OpenCV
Short Description: A cool robot that does things
```

Then write your content in markdown, ending with `END`.

## Example: Full Blog Post Workflow

**1. Create a markdown file (optional - you can type directly too):**

`my-post.md`:
```markdown
I've been working on constraint-driven design lately.

## Why Constraints Matter

Constraints force creativity. When you can't use expensive materials:
- You find clever alternatives
- You design for manufacturability
- You focus on what matters

Read more about [design thinking](https://example.com).

![Design sketch](../images/sketch.jpg)

## Results

The project succeeded because of the constraints, not despite them.
```

**2. Run the converter:**
```bash
python3 convert-markdown.py
```

**3. Choose blog post, enter title/date**

**4. Either:**
   - Copy-paste your markdown file content
   - Or type it directly

**5. Type `END` when done**

**6. The script:**
   - Creates the HTML file
   - Shows you what to add to blog.html
   - Tells you where the file is

**7. Update blog.html with the card snippet**

**8. Upload to GitHub - done!**

## Tips

### Write Offline
Create `.md` files in any text editor:
- Notepad
- VS Code
- Obsidian
- Notion

Then copy-paste into the script when ready.

### Keep Markdown Files
Save your `.md` files in a separate folder as backups:
```
my-articles/
  ├── blog-post-1.md
  ├── blog-post-2.md
  └── project-robot.md
```

### Preview Before Converting
Use a markdown preview tool:
- VS Code (built-in)
- Online: [dillinger.io](https://dillinger.io)
- Obsidian (live preview)

### Common Mistakes

❌ **Wrong:**
```markdown
##Header with no space
```

✅ **Right:**
```markdown
## Header with space
```

❌ **Wrong:**
```markdown
- No blank line before list
```

✅ **Right:**
```markdown

- Blank line before list
```

## Advanced: Batch Conversion

If you have multiple markdown files, you can modify the script or just run it multiple times.

## Troubleshooting

**"python3 not found"**
- Try `python convert-markdown.py` instead
- Or install Python from python.org

**"No such file or directory"**
- Make sure you're in the portfolio-site folder
- Check with `ls` (Mac/Linux) or `dir` (Windows)

**Formatting looks wrong**
- Check your markdown syntax
- Make sure there are blank lines between sections
- View the generated HTML file to debug

## Need Help?

The script is just Python - you can:
- Read the code (it's commented)
- Modify it for your needs
- Add features as you learn

The key sections:
- `markdown_to_html()` - Does the conversion
- `create_blog_post()` - Makes blog HTML
- `create_project_page()` - Makes project HTML

Happy writing! 📝