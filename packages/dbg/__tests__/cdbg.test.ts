import { cdbg } from '../src/dbg';

describe('test cases', () => {
  it('should work ', () => {
    const xdbg = cdbg('@zkbridge/api', 'color:red');
    xdbg('hello');
  });
});
