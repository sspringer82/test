describe('Notify', function() {
  it('should call the window.alert method', function() {
    const value = 'Wir testen spies';
    spyOn(window, 'alert');
    notify(value);
    expect(window.alert).toHaveBeenCalled();
  });
  describe('notify with dependency', function() {
    it('should work with a dependency spy object', function() {
      const value = 'Wir testen spies';
      const windowSpy = jasmine.createSpyObj('window', ['alert']);

      notifyWithDependency(windowSpy, value);
      expect(windowSpy.alert).toHaveBeenCalled();
    });
  });

  describe('notify with date', function() {
    beforeEach(() => {
      jasmine.clock().install();
      const date = new Date(2017, 1, 14);
      jasmine.clock().mockDate(date);
      spyOn(window, 'alert');
    });

    afterEach(() => jasmine.clock().uninstall());

    it('should call the notify function on a certain date', function() {
      notify('Hello');

      expect(window.alert).toHaveBeenCalledWith(
        'Mon, 13 Feb 2017 23:00:00 GMT Hello'
      );
    });

    describe('other mock date', function() {
      beforeEach(() => {
        const date = new Date(2017, 1, 15);
        jasmine.clock().mockDate(date);
      });

      it('should call the notify function on a certain date', function() {
        notify('Hello');

        expect(window.alert).toHaveBeenCalledWith(
          'Tue, 14 Feb 2017 23:00:00 GMT Hello'
        );
      });
    });
  });
});
