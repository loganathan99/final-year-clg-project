import { TruncateIdPipe } from './truncate-id.pipe';

describe('TruncateIdPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateIdPipe();
    expect(pipe).toBeTruthy();
  });
});
