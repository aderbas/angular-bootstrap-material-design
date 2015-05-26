/** core of your app
 request and any config */

function core($http, $location){
  
  return {
    service: service()
  }

  //////// methods implementation /////////

  function service(){
    return {
      post: function(url, obj){
        return $http.post(url, obj, headers()).then(function(response){
          return response.data;
        });        
      },
      put: function(url, obj){
        return $http.put(url, obj, headers()).then(function(response){
          return response.data;
        });        
      },      
      get: function(url){
        return $http.get(url).then(function(response){
          return response.data;
        });        
      }
    };
  }

  function headers(){
    return {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }
  }


}
