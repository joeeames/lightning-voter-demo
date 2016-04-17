
describe('userDetailsCtrlCtrl', function() {
  var $ctrlCnst; 
  
  beforeEach(module('app'));
  
  beforeEach(inject(function($controller) {
    $ctrlCnst = $controller;
  }));
  
  it('should set the user on the controller to the matching user by id', function() {
    
    var ctrl = $ctrlCnst('userDetailsCtrl',
      {
        allUsers: [{id:1,name:'wrong'},{id:3,name:'correct'}], 
        '$routeParams': {id:3}
      })
      
    expect(ctrl.user.name).toBe('correct');
  })
})