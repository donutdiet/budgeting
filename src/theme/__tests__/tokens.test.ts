import { palettes } from '../tokens';

describe('palettes', () => {
  it('defines the same tokens for light and dark', () => {
    expect(Object.keys(palettes.dark).sort()).toEqual(Object.keys(palettes.light).sort());
  });

  it('uses six-digit hex colours throughout', () => {
    for (const palette of Object.values(palettes)) {
      for (const value of Object.values(palette)) {
        expect(value).toMatch(/^#[0-9A-F]{6}$/);
      }
    }
  });
});
