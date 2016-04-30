
describe('parseNames', function() {
  
  beforeEach(module('app'))
  
  it('should parse names correctly', inject(function(nameParser) {
    expect(nameParser.parse('f@f.com|frank|furter')[0].firstName).toBe('frank');
  }))
  
})