# Accessibility


- https://github.dev/jsx-eslint/eslint-plugin-jsx-a11y


## What can be statically analyzed in code using ESLint A11y Plugin (Not Exhaustive List)
- Html has lang attribute
- Media has caption
- Missing onchange for input/select elements
- Prefer html tags over "role" attribute
- Img Alt text
- Vague Link href, unclear text
- Label `for` attribute 
- Accessible emoji

## What can be analyzed in Browser Audit (Lighthouse)(Not Exhaustive List)
- Color Contrast
- Img Alt text
- Heading Elements Sequencial Order
- Touchable targets do not have sufficient size or spacing(clickable area).

## What must be manually checked(Not Exhaustive List)
- Keyboard Navigation
- Screen Reader Compatibility
- ARIA Roles and Properties
- Semantic HTML
- ARIA Labels and Descriptions
- ARIA Live Regions
- ARIA Landmarks
