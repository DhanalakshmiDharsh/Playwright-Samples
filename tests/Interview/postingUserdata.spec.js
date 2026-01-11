import { test, expect } from '@playwright/test';
import { getValueByPath } from '../../utils/jsonHelper';

test('API User details posting', async ({ page, request }) => {

  const response = await request.post('https://reqres.in/api/users', {
    data: {
        personalDetails :{
      name: 'Dhars',
      job: 'QA'
    }
}
  });

  expect(response.status()).toBe(201);

  const responseBody = await response.json();
 expect(getValueByPath(responseBody, 'data.personalDetails.job')).toBe('QA');
  
// expect(value).toBe('QA')

expect(data.personalDetails.name).toBe('Dhars') 
});