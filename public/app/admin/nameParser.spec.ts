
import { NameParser } from './nameParser.service';

describe('parseNames', function() {
  let nameParser;

  beforeEach(() => {
    nameParser = new NameParser();
  })
  
  it('should parse names correctly', function() {
    expect(nameParser.parse('f@f.com|frank|furter')[0].firstName).toBe('frank');
  })
  
})