describe('userDetailsCtrl', function() {
  var $ctrlCnst;
  
  beforeEach(module('app'));
  
  beforeEach(inject(function($componentController) {
    $ctrlCnst = $componentController;
  }));
  
  it('should set the user on the controller to the matching user by id', function() {
    var ctrl = $ctrlCnst('userDetails', 
      { $routeParams: {id: 23}}, // locals
      {allUsers: [{id:23, name:'yes'},{id:4, name: 'no'}]} // bindings
    )
      
    expect(ctrl.user.name).toBe('yes');
  })
})
