/* global require */

if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}

// Starts main modules
// Publishing from core because that's the way that Nicholas did it...
require(['core'], function (core) {
  core.start([
    { channel: 'todos', element: '#todoapp' },
    { channel: 'calendar', element: '#calendarapp' },
    { channel: 'controls', element: '#controlsapp' }
  ]);
});
