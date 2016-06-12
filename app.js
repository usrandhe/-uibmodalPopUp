angular.module('ui.bootstrap.demo', ['ui.bootstrap'])
  .factory('modalFactory', function($uibModal) {
    return {
      open: function(size, template, params,ctrl) {
        return $uibModal.open({
          animation: true,
          templateUrl: template || 'myModalContent.html',
          //controller: 'ModalResultInstanceCtrl',
          controller: ctrl,
          size: size,
          resolve: {
            params: function() {
              return params;
            }
          }
        });
      }
    };
  })
  .controller('ModalDemoCtrl', function($rootScope, $scope, $log, $uibModal) {

    //$scope.items = ['item1', 'item2', 'item3'];

    //$scope.animationsEnabled = true;

    $scope.open = function(size, template) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: template || 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size
      });

      /*modalInstance.result.then(function(selectedItem) {
        $scope.selected = selectedItem;
      }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });*/
    };

    $scope.toggleAnimation = function() {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };

  });

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function($scope, $uibModalInstance, modalFactory) {

  //$scope.searchTerm = term;

  $scope.ok = function() {
    modalFactory.open('lg', 'result.html', {
      searchTerm: $scope.searchTerm
    }, 'ModalResultInstanceCtrl');
    $uibModalInstance.close($scope.searchTerm);
  };
  

  $scope.cancel = function() {
    //$uibModalInstance.dismiss('cancel');
  };
});


angular.module('ui.bootstrap.demo').controller('ModalResultInstanceCtrl', function($scope, $uibModalInstance, params, modalFactory) {

  $scope.searchTerm = params.searchTerm;

  $scope.ok = function() {
    $uibModalInstance.close($scope.searchTerm);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  }; 
  $scope.OpenOneMore = function() {
    modalFactory.open('lg', 'result1.html', {
      searchTerm: '$scope.searchTerm'
    }, 'ModalResultInstanceCtrl1');
    //window.alert($scope.searchTerm);
    $uibModalInstance.close($scope.searchTerm);
  };
})

angular.module('ui.bootstrap.demo').controller('ModalResultInstanceCtrl1', function($scope, $uibModalInstance, params) {

  $scope.searchTerm = params.searchTerm;

  $scope.ok = function() {
    $uibModalInstance.close($scope.searchTerm);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
})
