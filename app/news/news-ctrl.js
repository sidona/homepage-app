

app.controller("newsCtrl", ['$scope','FeedService', FeedCtrl]);

function FeedCtrl($scope, FeedService)
{

    retrieveFromLocalStorage();
    $scope.phMessage = "Enter Feed URL";
    $scope.currentButtonText=$scope.allFeeds[0].titleText;
    $scope.loadFeed=function(e,url){
        $scope.currentButtonText = angular.element(e.target).text();

        $scope.filterText = "";
        console.log("loadFeed / click event fired");

        if ($scope.currentButtonText == $scope.allFeeds[0].titleText)
        {

            url = $scope.feedSrc;
        }


        $scope.feedSrc = url;
        if (url === undefined || url === "")
        {
            $scope.phMessage = "Please enter a valid Feed URL & try again.";
            return;
        }
        console.log("button text: " + angular.element(e.target).text());
        console.log("value of url: " );
        console.log(url);
        FeedService.parseFeed(url).then(function(res){
            $scope.loadButonText=angular.element(e.target).text();
            $scope.feeds=res.data.responseData.feed.entries;
        });
    }
    $scope.clearText=function()
    {
        $scope.filterText = "";
    }

    function saveToLocalStorage(feeds)
    {


        localStorage.setItem('feeds', angular.toJson(feeds));
        console.log("tojson ",angular.toJson(feeds));
        console.log("wrote feeds to localStorage");
    }

    function retrieveFromLocalStorage()
    {
        $scope.allFeeds = [];
        console.log("retrieving localStorage...");
        try
        {
            $scope.allFeeds = JSON.parse(localStorage["feeds"]);
            console.log($scope.allFeeds.length);


            if ($scope.allFeeds === null)
            {
                console.log("couldn't retrieve feeds" );
                loadDefaultFeeds();
            }
        }
        catch (ex)
        {
            console.log("ex: " + ex);
            loadDefaultFeeds();
            saveToLocalStorage($scope.allFeeds);
        }

    }

    function loadDefaultFeeds()
    {
        $scope.allFeeds = [{titleText:"Load (from textbox)",url:""},
            {titleText:"Radu",url:"http://www.radufconstantinescu.ro/feeds/posts/default"},
            {titleText:"CNN",url:"http://rss.cnn.com/rss/cnn_topstories.rss"}
        ];
    }
    $scope.removeAllFeedsFromLocalStorage = removeAllFeedsFromLocalStorage;
    $scope.saveFeed = saveFeed;

    function removeAllFeedsFromLocalStorage()
    {
        localStorage.removeItem('feeds');
    }

    function saveFeed()
    {
        console.log("feedSrc");
        console.log($scope.feedSrc);
        if ($scope.feedSrc === undefined || $scope.feedSrc == "")
        {
            alert("Please provide a Feed URL and try again.");
            return;
        }
        var titleText = prompt("Please enter the feed title text", "");
        if (titleText != null) {
            f = new feed(titleText, $scope.feedSrc);
            $scope.allFeeds.push(f);
            saveToLocalStorage($scope.allFeeds);
        }
    }

}

function feed(titleText, url)
{
    this.titleText = titleText;
    this.url = url;
}