/**
 * Created by sdonose on 9/28/2015.
 */
app.filter('pagination', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    };
});