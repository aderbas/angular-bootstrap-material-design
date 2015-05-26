/** core of your app
 request and any config */

function core($http, $location, $q){
  
  return {
    service: service(),
    shared: shared()
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
      },
      load: function(urls){
        if(!Array.isArray(urls)){
          urls = [urls];
        }
        var deferred = $q.defer(),i,urlCalls=[];
        for(i in urls){
          urlCalls.push($http.get(urls[i]));
        }
        // execute all
        $q.all(urlCalls)
          .then(function(response){ // success
            deferred.resolve(response);
          }, function(erros){ // erros
            deferred.reject(erros);
          }, function(updates){ // updates
            deferred.update(updates);
        });
        return deferred.promise;
      }
    };
  }

  function headers(){
    return {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }
  }

  function shared(){
    var data;
    return {
      get: function(){
        return data;
      },
      set: function(value){
        data = value;
      }
    };
  }


}
