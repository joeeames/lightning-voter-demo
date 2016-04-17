
describe('parseNames', function() {
  
  beforeEach(module('app'))
  
  it('should parse names correctly', inject(function(parseNames) {
    expect(parseNames('f@f.com|frank|furter')[0].firstName).toBe('frank');
  }))
})