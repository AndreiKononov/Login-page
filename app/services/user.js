(function () {
  'use strict';
  angular.module('app')
    .service('user', ['$q', userData]);

  function userData($q) {
      let data = {
        id: '1',
        name: 'Andrei',
        age: '33',
        birthday: '1985/01/11',
        login: '27 October 2018',
        notification: '27-Oct-18'
      };
      function loadData() {
        var deferred = $q.defer();
        setTimeout(function () {
          deferred.notify('Data is loading...');
          if(data) {
            deferred.resolve(data);
          } else {
            deferred.reject('Data loading felt');
          }
        }, 3000);
        return deferred.promise;
      }
      return {
        loadData: loadData
      };
    }
})();
