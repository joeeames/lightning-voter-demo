import { NameParser } from "./nameParser.service";

describe('nameParser', function () {
  var nameParser;

  beforeEach(() => {
    nameParser = new NameParser();
  })

  it('should parse names correctly', () => {
    expect(nameParser.parse('f@f.com|frank|furter')[0].firstName).toBe('frank');
  })
  
})