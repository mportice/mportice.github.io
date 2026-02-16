#!/usr/bin/env python3
"""
Markdown to Portfolio Page Converter
Converts markdown files into ready-to-upload blog posts or project pages
"""

import sys
import re
from datetime import datetime

def markdown_to_html(markdown_text):
    """Convert markdown to HTML"""
    html = markdown_text
    
    # Headers (h2 and h3)
    html = re.sub(r'^## (.*?)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
    html = re.sub(r'^# (.*?)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)  # Using h2 for main headers
    
    # Bold and italic
    html = re.sub(r'\*\*\*(.*?)\*\*\*', r'<strong><em>\1</em></strong>', html)
    html = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', html)
    html = re.sub(r'\*(.*?)\*', r'<em>\1</em>', html)
    
    # Links - external links open in new tab
    def replace_link(match):
        text = match.group(1)
        url = match.group(2)
        # Check if it's an external link (starts with http)
        if url.startswith('http://') or url.startswith('https://'):
            return f'<a href="{url}" target="_blank" rel="noopener noreferrer">{text}</a>'
        else:
            return f'<a href="{url}">{text}</a>'
    
    html = re.sub(r'\[(.*?)\]\((.*?)\)', replace_link, html)
    
    # Images
    html = re.sub(r'!\[(.*?)\]\((.*?)\)', r'<img src="\2" alt="\1">', html)
    
    # Unordered lists
    lines = html.split('\n')
    in_ul = False
    result = []
    
    for line in lines:
        if line.strip().startswith('- '):
            if not in_ul:
                result.append('<ul>')
                in_ul = True
            result.append(f'<li>{line.strip()[2:]}</li>')
        else:
            if in_ul:
                result.append('</ul>')
                in_ul = False
            result.append(line)
    
    if in_ul:
        result.append('</ul>')
    
    html = '\n'.join(result)
    
    # Ordered lists
    lines = html.split('\n')
    in_ol = False
    result = []
    
    for line in lines:
        if re.match(r'^\d+\.\s', line.strip()):
            if not in_ol:
                result.append('<ol>')
                in_ol = True
            content = re.sub(r'^\d+\.\s', '', line.strip())
            result.append(f'<li>{content}</li>')
        else:
            if in_ol:
                result.append('</ol>')
                in_ol = False
            result.append(line)
    
    if in_ol:
        result.append('</ol>')
    
    html = '\n'.join(result)
    
    # Paragraphs (wrap text that's not already in tags)
    lines = html.split('\n')
    result = []
    
    for line in lines:
        stripped = line.strip()
        if stripped and not stripped.startswith('<') and not stripped.endswith('>'):
            result.append(f'<p>{stripped}</p>')
        else:
            result.append(line)
    
    return '\n'.join(result)

def create_blog_post(title, date, content, filename):
    """Create a complete blog post HTML file"""
    html_content = markdown_to_html(content)
    
    # Create blog directory if it doesn't exist
    import os
    os.makedirs('blog', exist_ok=True)
    
    template = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Lines and Layers</title>
    <meta name="description" content="{title}">
    <link rel="icon" type="image/png" href="../favicon.png">
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <nav>
        <div class="nav-left">
            <div class="logo">
                <a href="../index.html">
                    <img src="../logo.png" alt="Lines and Layers">
                </a>
            </div>
            <div class="brand-name">Lines and Layers</div>
        </div>
        <ul class="nav-links">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../projects.html">Projects</a></li>
            <li><a href="../blog.html" class="active">Blog</a></li>
            <li><a href="../contact.html">Contact</a></li>
        </ul>
    </nav>

    <main class="page-content">
        <div class="blog-detail">
            <a href="../blog.html" class="back-button">← Back to Blog</a>
            
            <div class="blog-detail-header">
                <div class="blog-date">{date}</div>
                <h1>{title}</h1>
            </div>

            <div class="blog-detail-content">
                {html_content}
            </div>
        </div>
    </main>
</body>
</html>'''
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(template)
    
    print(f"✅ Blog post created: {filename}")

def create_project_page(title, year, role, tech, description, content, filename):
    """Create a complete project page HTML file"""
    html_content = markdown_to_html(content)
    
    # Create projects directory if it doesn't exist
    import os
    os.makedirs('projects', exist_ok=True)
    
    template = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Lines and Layers</title>
    <meta name="description" content="{description}">
    <link rel="icon" type="image/png" href="../favicon.png">
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <nav>
        <div class="nav-left">
            <div class="logo">
                <a href="../index.html">
                    <img src="../logo.png" alt="Lines and Layers">
                </a>
            </div>
            <div class="brand-name">Lines and Layers</div>
        </div>
        <ul class="nav-links">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../projects.html" class="active">Projects</a></li>
            <li><a href="../blog.html">Blog</a></li>
            <li><a href="../contact.html">Contact</a></li>
        </ul>
    </nav>

    <main class="page-content">
        <div class="project-detail">
            <a href="../projects.html" class="back-button">← Back to Projects</a>
            
            <div class="project-detail-header">
                <h1>{title}</h1>
                <div class="project-meta">
                    <div class="project-meta-item">
                        <span class="project-meta-label">Year</span>
                        <span>{year}</span>
                    </div>
                    <div class="project-meta-item">
                        <span class="project-meta-label">Role</span>
                        <span>{role}</span>
                    </div>
                    <div class="project-meta-item">
                        <span class="project-meta-label">Tech</span>
                        <span>{tech}</span>
                    </div>
                </div>
                <p style="font-size: 1.2rem; color: var(--text-secondary); line-height: 1.8;">{description}</p>
            </div>

            <div class="project-content">
                {html_content}
            </div>
        </div>
    </main>
</body>
</html>'''
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(template)
    
    print(f"✅ Project page created: {filename}")

def main():
    print("=" * 50)
    print("Markdown to Portfolio Page Converter")
    print("=" * 50)
    print()
    
    # Ask what type of page
    print("What are you creating?")
    print("1. Blog Post")
    print("2. Project Page")
    choice = input("Enter 1 or 2: ").strip()
    
    if choice == "1":
        # Blog post
        print("\n--- Blog Post ---")
        title = input("Title: ").strip()
        date = input("Date (YYYY.MM.DD) [press Enter for today]: ").strip()
        if not date:
            date = datetime.now().strftime("%Y.%m.%d")
        
        print("\nEnter your content in Markdown format.")
        print("When done, type 'END' on a new line and press Enter:\n")
        
        content_lines = []
        while True:
            line = input()
            if line.strip() == "END":
                break
            content_lines.append(line)
        
        content = '\n'.join(content_lines)
        
        # Generate filename from title
        filename_base = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
        filename = f"blog/{filename_base}.html"
        
        create_blog_post(title, date, content, filename)
        
        # Show how to add to blog.html
        print("\n" + "=" * 50)
        print("📝 Next steps:")
        print("=" * 50)
        print(f"\n1. Add this card to blog.html:\n")
        print(f'''<a href="blog/{filename_base}.html" class="blog-post">
    <div class="blog-date">{date}</div>
    <h3>{title}</h3>
    <p>Brief excerpt here...</p>
</a>''')
        
    elif choice == "2":
        # Project page
        print("\n--- Project Page ---")
        title = input("Title: ").strip()
        year = input("Year: ").strip()
        role = input("Role: ").strip()
        tech = input("Tech Stack: ").strip()
        description = input("Short Description: ").strip()
        
        print("\nEnter your content in Markdown format.")
        print("When done, type 'END' on a new line and press Enter:\n")
        
        content_lines = []
        while True:
            line = input()
            if line.strip() == "END":
                break
            content_lines.append(line)
        
        content = '\n'.join(content_lines)
        
        # Generate filename from title
        filename_base = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
        filename = f"projects/{filename_base}.html"
        
        create_project_page(title, year, role, tech, description, content, filename)
        
        # Show how to add to projects.html
        print("\n" + "=" * 50)
        print("📝 Next steps:")
        print("=" * 50)
        print(f"\n1. Add this card to projects.html:\n")
        print(f'''<a href="projects/{filename_base}.html" class="project-card">
    <div class="project-image">##</div>
    <div class="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
</a>''')
    
    else:
        print("Invalid choice. Please run again and enter 1 or 2.")
        return
    
    print("\n✨ Done! Your page is ready to upload.")

if __name__ == "__main__":
    main()
