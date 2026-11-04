import { test, expect } from '@playwright/test';

test('login berhasil dengan user valid', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});

test('login gagal dengan password salah', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('aku_salah');
  await page.locator('#login-button').click();

  await expect(page.locator('[data-test="error"]')).toContainText('do not match');
});