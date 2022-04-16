import { newE2EPage } from '@stencil/core/testing';

describe('ceylon-dots', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ceylon-dots></ceylon-dots>');

    const element = await page.find('ceylon-dots');
    expect(element).toHaveClass('hydrated');
  });
});
