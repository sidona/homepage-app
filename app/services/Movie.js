/**
 * Created by sdonose on 9/28/2015.
 */

app.factory('Movie', function (ENDPOINT_URI, $resource) {
  return $resource(ENDPOINT_URI + "/movies/:id", {id: '@_id'});
  update: {
    method: 'PUT'
  }
});



