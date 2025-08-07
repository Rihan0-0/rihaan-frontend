# Images Directory

This directory contains all the images used in the Student Dashboard application.

## Folder Structure:

### `/profile/`

- Place user profile avatar images here
- Recommended: square images (e.g., 100x100px, 200x200px)
- Supported formats: PNG, JPG, JPEG, SVG

### `/students/`

- Place student images for the memorization progress card
- Recommended: square or portrait images
- Suggested size: 120x120px or larger
- Supported formats: PNG, JPG, JPEG, SVG

## Usage in Components:

### Profile Avatar (Header):

```tsx
<Image
  src="/images/profile/avatar.png"
  alt="User Profile"
  width={40}
  height={40}
/>
```

### Student Image (WelcomeCard):

```tsx
<Image
  src="/images/students/student.png"
  alt="Student"
  width={120}
  height={120}
/>
```

## Notes:

- All images in the `public` folder are accessible via URLs starting with `/`
- Always use the Next.js `Image` component for better performance
- Consider using optimized formats like WebP for better loading speeds
