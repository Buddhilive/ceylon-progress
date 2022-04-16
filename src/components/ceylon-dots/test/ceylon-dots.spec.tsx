import { newSpecPage } from '@stencil/core/testing';
import { CeylonDots } from '../ceylon-dots';

describe('ceylon-dots', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CeylonDots],
      html: `<ceylon-dots></ceylon-dots>`,
    });
    expect(page.root).toEqualHtml(`
      <ceylon-dots>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ceylon-dots>
    `);
  });
});
