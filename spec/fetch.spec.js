describe('fetch', () => {
  fit('xxx', async () => {
    fetchMock.mock('http://example.com', {
      body: JSON.stringify({ name: 'basti' }),
      status: 500,
    });
    const res = await fetch('http://example.com');
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.name).toBe('basti');
    fetchMock.restore();
  });
});
