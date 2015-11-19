// Avoid `console` errors in browsers that lack a console.
document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact me via sajjad@withpulp.com.');
    console.log('Fork me from https://github.com/sajjadhossain/resume-builder.');
    $('ul.tabs').tabs();
    $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    $('.dropdown-button').dropdown();
    (function() {
        var method;
        var noop = function () {};
        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});

        while (length--) {
            method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
    }());
});
// GOOGLE Analytics
