# Visual Regression Testing

This directory contains visual regression tests for the accessibilite.public.lu website using Puppeteer and PixelMatch.

## Overview

The visual regression tests automatically discover and test all pages of the website by:
- Reading page configurations from `scripts/config_fr.js` and `scripts/config_en.js`
- Discovering news articles dynamically
- Taking full-page screenshots
- Comparing against baseline images
- Generating diff images for failures

## Usage

### Running Tests

```bash
# Run all visual regression tests
npm run test:visual

# Run visual tests only (without server)
npm run visual

# Update baseline images
npm run visual:update
```

### First Time Setup

1. Build the website: `npm run build`
2. Create baseline images: `npm run visual:update`
3. Commit baseline images to git
4. Run tests: `npm run test:visual`

### Directory Structure

```
test/
├── screenshots/
│   ├── baseline/     # Reference images (committed to git)
│   ├── actual/       # Current screenshots (ignored by git)
│   └── diff/         # Difference images (ignored by git)
├── visualTests.js    # Main test script
└── README.md         # This file
```

## Configuration

The visual tests automatically discover pages from:
- Main menu items (config.mainMenu)
- Footer items (config.footer) 
- Hidden pages (config.hidden)
- Deprecated pages (config.deprecated)
- News articles (dynamic discovery)

### Environment Variables

- `DISABLE_EN=true` - Skip English version testing
- `NODE_ENV=production` - Use production mode for article filtering

### Test Settings

- Viewport: 1200x800 pixels
- Full page screenshots
- Animations/transitions disabled for consistency
- Network idle timeout: 30 seconds
- Pixel difference threshold: 0.1

## Troubleshooting

### Common Issues

1. **No baseline found**: Run `npm run visual:update` to create initial baselines
2. **Dimension mismatch**: Content height changes are expected, width changes may indicate layout issues
3. **Font rendering differences**: Different OS/browsers may render fonts slightly differently
4. **Dynamic content**: Ensure dates, times, or dynamic content is stable

### Updating Baselines

When intentional design changes are made:
```bash
npm run visual:update
git add test/screenshots/baseline/
git commit -m "Update visual baselines for design changes"
```

### Debugging Failures

1. Check the diff images in `test/screenshots/diff/`
2. Compare actual vs baseline in `test/screenshots/actual/` and `test/screenshots/baseline/`
3. Look for console errors during screenshot capture
4. Verify the page loads correctly in browser

## CI/CD Integration

For continuous integration:
1. Baseline images should be committed to git
2. Tests should fail if visual differences exceed threshold
3. Consider running tests on consistent browser/OS environment
4. Update baselines only through explicit process/approval

## Technical Details

- **Browser**: Puppeteer (Chromium)
- **Image Comparison**: PixelMatch
- **Image Format**: PNG
- **Comparison Threshold**: 0.1 (adjustable)
- **Page Discovery**: Configuration-based + dynamic news discovery