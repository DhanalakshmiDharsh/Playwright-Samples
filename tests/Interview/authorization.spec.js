import { test, expect } from '@playwright/test';

test('User login', async ({ request }) => {
  const response = await request.post('https://dummyjson.com/auth/login', {
    data: {
      username: 'kminchelle',
      password: '0lelplR'
    }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.token).toBeDefined();
});
