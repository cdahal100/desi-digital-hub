import { test, expect } from '@playwright/test';

test.describe('Desi Digital Hub Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Desi Digital Hub/);
  });

  test('displays main navigation', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Services' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('displays hero section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Desi Digital Hub/ })).toBeVisible();
    await expect(page.getByText(/Connecting Cultures Digitally/)).toBeVisible();
  });

  test('displays logo', async ({ page }) => {
    await expect(page.getByAltText(/Desi Digital Hub/)).toBeVisible();
  });

  test('responsive design - mobile view', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByRole('heading', { name: /Desi Digital Hub/ })).toBeVisible();
    await expect(page.getByText(/Connecting Cultures Digitally/)).toBeVisible();
  });

  test('responsive design - tablet view', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByRole('heading', { name: /Desi Digital Hub/ })).toBeVisible();
    await expect(page.getByText(/Connecting Cultures Digitally/)).toBeVisible();
  });

  test('footer is present', async ({ page }) => {
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.getByText(/© 2025 Desi Digital Hub/)).toBeVisible();
  });

  test('navigation links are clickable', async ({ page }) => {
    const aboutLink = page.getByRole('link', { name: 'About' });
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveAttribute('href', '#about');
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
