describe('createEv.js', function() {
  // Example: A test case of createEventCtrl
  describe('createEventCtrl',function(){
    var $firebaseRef, $scope;

    beforeEach(module("teamform-member-app"));
    beforeEach(inject(function ($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller("createEventCtrl", {
        $scope: $scope,
        //$firebaseObject: $firebaseObject
      });

      //$firebaseRef = new Firebase("https://myurl.firebaseio.com/somechild");
    }));

    expect($scope.newTeam).toBeDefined;
    expect($scope.page).toEqual(0);
    expect($scope.minTeam).toEqual(0);
    expect($scope.maxTeam).toEqual(10);

    describe('create event',function(){
      $scope.createEvent();
      expect($scope.page).toEqual(0);
    });

  });
});
