import getGifs from '../../src/helper/getGifs';

describe('getGifs() tests', () => {
  test('must return an array of gifs', async () => {
    const gifs = await getGifs('hades');
    console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
