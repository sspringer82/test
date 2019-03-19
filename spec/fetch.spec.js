describe('fetch', () => {
  it('should fetch data from Server', async () => {
    fetchMock.mock('http://example.com', {
      body: JSON.stringify({ name: 'basti' }),
      status: 200,
    });
    const res = await fetch('http://example.com');
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.name).toBe('basti');
    fetchMock.restore();
  });
});

describe('ajax', () => {
  it('should work with xmlhttprequest', () => {
    jasmine.Ajax.install();
    var doneFn = jasmine.createSpy('success');

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(args) {
      if (this.readyState == this.DONE) {
        doneFn(this.responseText);
      }
    };

    xhr.open('GET', '/some/cool/url');
    xhr.send();

    expect(jasmine.Ajax.requests.mostRecent().url).toBe('/some/cool/url');
    expect(doneFn).not.toHaveBeenCalled();

    jasmine.Ajax.requests.mostRecent().respondWith({
      status: 200,

      contentType: 'text/plain',

      responseText: 'awesome response',
    });

    expect(doneFn).toHaveBeenCalledWith('awesome response');
    jasmine.Ajax.uninstall();
  });
});
