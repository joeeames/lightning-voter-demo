

describe('detailPanel', function() {
  
  var $compile,
      $rootScope
  
  beforeEach(module('app'));
  beforeEach(module('/components/detailPanel.html'));
  
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }))
  
  it('should have the title in the html', function() {
    
    var element = $compile('<detail-panel title="This is the Title"></detail-panel>')($rootScope);
    $rootScope.$digest();
    
    expect(element.text()).toContain('This is the Title');
  })
})