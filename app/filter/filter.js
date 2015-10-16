/**
 * Created by sdonose on 9/28/2015.
 */
app.filter('pagination', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    };
});
app.filter('timestampToDate', function () {
    return function (timestamp) {
        var date = new Date(timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = date+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


        return date;
    };
});
