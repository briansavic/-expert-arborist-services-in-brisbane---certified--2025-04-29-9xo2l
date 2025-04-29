# Brisbane Arborist Landing Page - Maintenance Guide

This guide will help you maintain and customize the Brisbane Arborist landing page. It's written for beginners with no prior coding experience.

## Table of Contents
- [Updating Text and Styling](#updating-text-and-styling)
- [Managing Links](#managing-links)
- [Adding Privacy and Terms Pages](#adding-privacy-and-terms-pages)
- [Troubleshooting](#troubleshooting)

## Updating Text and Styling

### Header Section
The header contains your main navigation and logo text:

```html
<header class="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
    <a href="/" class="text-2xl font-bold text-gray-800">Brisbane Arborists</a>
</header>
```

To update:
1. Change "Brisbane Arborists" to your business name
2. Adjust text size by modifying `text-2xl` to:
   - `text-xl` (smaller)
   - `text-3xl` (larger)
   - `text-4xl` (extra large)

### Hero Section
The hero section is your main banner:

```html
<h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
    Expert Arborist Services in Brisbane - Certified
</h1>
<p class="text-xl md:text-2xl text-white/90 mb-8">
    Get Safe Tree Removal With Enhanced Curb Appeal
</p>
```

To modify:
1. Replace heading text between `<h1>` tags
2. Update subheading text between `<p>` tags
3. Adjust text colors:
   - `text-white` → `text-gray-100` (lighter)
   - `text-white` → `text-gray-200` (slightly darker)

### Tailwind CSS Class Guide
Common classes used throughout:
- Spacing: `px-6` (padding left/right), `py-4` (padding top/bottom)
- Colors: `bg-green-600` (background), `text-white` (text color)
- Hover: `hover:bg-green-700` (color change on hover)
- Responsive: `md:text-6xl` (applies at medium screens)

## Managing Links

### Current Link Structure
The page contains these main links:

```html
<!-- Navigation Menu -->
<a href="#services">Services</a>
<a href="#benefits">Benefits</a>
<a href="#faq">FAQ</a>
<a href="https://briansavic.com">Get Quote</a>

<!-- Call-to-Action Buttons -->
<a href="https://briansavic.com" class="inline-block px-8 py-4 bg-green-600">
    Get Free Quote
</a>
```

To update links:
1. Internal links (starting with #):
   ```html
   <a href="#services">Services</a>
   <!-- Change to -->
   <a href="#new-section-id">New Section Name</a>
   ```

2. External links:
   ```html
   <a href="https://briansavic.com">
   <!-- Change to -->
   <a href="https://your-website.com">
   ```

### Link Verification Steps
1. Check all `href` attributes in navigation
2. Update quote button links
3. Verify footer links match navigation
4. Test all links after updating

## Adding Privacy and Terms Pages

### Footer Modification
Add privacy and terms links to the footer's Quick Links section:

```html
<div>
    <h3 class="text-xl font-bold mb-4">Quick Links</h3>
    <ul class="space-y-2">
        <li><a href="#services" class="hover:text-green-400 transition-colors">Services</a></li>
        <li><a href="#faq" class="hover:text-green-400 transition-colors">FAQ</a></li>
        <!-- Add these new lines -->
        <li><a href="/privacy.html" class="hover:text-green-400 transition-colors">Privacy Policy</a></li>
        <li><a href="/terms.html" class="hover:text-green-400 transition-colors">Terms of Service</a></li>
    </ul>
</div>
```

### Creating Policy Pages
1. Create new files:
   - `privacy.html`
   - `terms.html`
2. Use the same header and footer as `index.html`
3. Maintain consistent styling:
   ```html
   <a href="/privacy.html" class="hover:text-green-400 transition-colors">
   ```

## Troubleshooting

Common Issues:
1. **Broken Links**
   - Check for typos in `href` attributes
   - Ensure file names match exactly
   - Verify file locations

2. **Styling Problems**
   - Confirm Tailwind CSS is loading
   - Check for missing classes
   - Verify responsive classes use correct breakpoints (`md:`, `lg:`)

3. **Layout Issues**
   - Check container classes
   - Verify grid column settings
   - Ensure proper spacing classes

Need Help?
- Review the [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Use browser inspection tools to debug
- Test on multiple devices and screen sizes

Remember to:
- Back up files before making changes
- Test all modifications in a browser
- Maintain consistent styling across pages
- Keep mobile responsiveness in mind