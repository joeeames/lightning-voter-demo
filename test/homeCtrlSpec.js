
describe('HomeCtrl', function() {
  var $ctrlCnst;
  var mockCurId = {currentUser: {id:555}};
  var mockUserSessions = [];
  var mockSessions = {
    getNextUnreviewedSession: function() {return {then: function() {}}}
  };
  var mockToastr = {};
  var mockUnreviewedSessionCount = {};  
  
  
  beforeEach(module('app'));
  
  beforeEach(inject(function($controller) {
    $ctrlCnst = $controller;
  }));
  
  it('should set the currentUser on the controller', function() {
    
    var ctrl = $ctrlCnst('homeCtrl',
      {
        currentIdentity: mockCurId, 
        userSessions: mockUserSessions,
        sessions: mockSessions,
        toastr: mockToastr,
        unreviewedSessionCount: mockUnreviewedSessionCount
      })
      
    expect(ctrl.currentUser).toBe(mockCurId.currentUser);
  })
})