import { test, expect } from '@playwright/test';

test.describe('Desi Digital Hub Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Desi Digital Hub/);
  });

  test('displays main navigation', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Pricing' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Cultural Services' })).toBeVisible();
  });

  test('displays hero section', async ({ page }) => {
    await expect(page.getByText(/Empower Your/)).toBeVisible();
    await expect(page.getByText(/Nepali & Bhutanese/)).toBeVisible();
  });

  test('displays logo', async ({ page }) => {
    await expect(page.getByAltText(/Desi Digital Hub - Connecting Cultures Digitally/)).toBeVisible();
  });

  test('responsive design - mobile view', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByText(/Empower Your/)).toBeVisible();
    await expect(page.getByText(/Nepali & Bhutanese/)).toBeVisible();
  });

  test('responsive design - tablet view', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByText(/Empower Your/)).toBeVisible();
    await expect(page.getByText(/Nepali & Bhutanese/)).toBeVisible();
  });

  test('footer is present', async ({ page }) => {
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.getByText(/© 2025 Desi Digital Hub/)).toBeVisible();
  });

  test('navigation links are present', async ({ page }) => {
    const featuresLink = page.getByRole('link', { name: 'Features' });
    await expect(featuresLink).toBeVisible();
    await expect(featuresLink).toHaveAttribute('href', '#features');
  });

  test('page loads without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    
    // Wait for any async operations to complete
    await page.waitForTimeout(2000);
    
    expect(consoleErrors).toHaveLength(0);
  });
});
