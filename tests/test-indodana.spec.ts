import { test, expect } from '@playwright/test';

test('test-indodana', async ({ page }) => {
  // Buka URL halaman pendaftaran di browser
  await page.goto('https://www.cermati.com/app/gabung');

  // Klik pada input field untuk memasukkan nomor handphone
  await page.getByPlaceholder('Masukkan No. Handphone').click();

  // Isi input field nomor handphone dengan nilai '0812345323'
  await page.getByPlaceholder('Masukkan No. Handphone').fill('0812345323');

  // Klik pada input field untuk memasukkan email
  await page.getByPlaceholder('Masukkan Email').click();

  // Isi input field email dengan nilai 'leadersheet@gmail.com'
  await page.getByPlaceholder('Masukkan Email').fill('leadersheet@gmail.com');

  // Klik pada input field untuk memasukkan nama depan
  await page.getByPlaceholder('Masukkan Nama Depan').click();

  // Isi input field nama depan dengan nilai 'Shellafuri'
  await page.getByPlaceholder('Masukkan Nama Depan').fill('Shellafuri');

  // Klik pada input field untuk memasukkan nama belakang
  await page.getByPlaceholder('Masukkan Nama Belakang').click();

  // Isi input field nama belakang dengan nilai 'Biru Mardika'
  await page.getByPlaceholder('Masukkan Nama Belakang').fill('Biru Mardika');

  // Klik pada teks 'Daftar' untuk memvalidasi input data
  await page.getByText('DaftarNo. HandphoneEmailNama').click();

  // Klik tombol 'Daftar' untuk mengirimkan data pendaftaran
  await page.getByRole('button', { name: 'Daftar' }).click();
});
