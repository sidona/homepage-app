/**
 * Created by sdonose on 9/24/2015.
 */
app.factory('FeedLoader', function ($resource) {
    return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
        fetch: {method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'}}
    });
})
app.service('FeedList', function ($rootScope, FeedLoader) {
    var feeds = [];
    this.get = function () {
        var feedSources = [
            {title: '"Blog Radu Constantinescu', url: 'http://www.radufconstantinescu.ro/feeds/posts/default'}
        ];
        if (feeds.length === 0) {
            for (var i = 0; i < feedSources.length; i++) {
                FeedLoader.fetch({q: feedSources[i].url, num: 6}, {}, function (data) {
                    var feed = data.responseData.feed;
                    feeds.push(feed);
                });
            }
        }
        return feeds;
    };
})