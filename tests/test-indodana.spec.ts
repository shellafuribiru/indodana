import { test, expect } from '@playwright/test';

test('test-indodana', async ({ page }) => {
  await page.goto('https://www.cermati.com/app/gabung');
  await page.getByPlaceholder('Masukkan No. Handphone').click();
  await page.getByPlaceholder('Masukkan No. Handphone').fill('0812345323');
  await page.getByPlaceholder('Masukkan Email').click();
  await page.getByPlaceholder('Masukkan Email').fill('leadersheet@gmail.com');
  await page.getByPlaceholder('Masukkan Nama Depan').click();
  await page.getByPlaceholder('Masukkan Nama Depan').fill('Shellafuri');
  await page.getByPlaceholder('Masukkan Nama Belakang').click();
  await page.getByPlaceholder('Masukkan Nama Belakang').fill('Biru Mardika');
  await page.getByText('DaftarNo. HandphoneEmailNama').click();
  await page.getByRole('button', { name: 'Daftar' }).click();
});