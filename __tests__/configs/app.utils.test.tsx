import { parseBooleanEnv } from '../../src/configs/app-utils';

describe('App Utils', () => {
  it('parsing env to boolean correctly when env is false', () => {
    const boolEnv = parseBooleanEnv('false');
    expect(typeof boolEnv).toEqual('boolean');
    expect(boolEnv).toEqual(false);
  });
  it('parsing env to boolean correctly when env is no', () => {
    const boolEnv = parseBooleanEnv('no');
    expect(typeof boolEnv).toEqual('boolean');
    expect(boolEnv).toEqual(false);
  });
  it('parsing env to boolean correctly when env is empty', () => {
    const boolEnv = parseBooleanEnv('');
    expect(typeof boolEnv).toEqual('boolean');
    expect(boolEnv).toEqual(false);
  });
  it('parsing env to boolean correctly when env is 0', () => {
    const boolEnv = parseBooleanEnv('0');
    expect(typeof boolEnv).toEqual('boolean');
    expect(boolEnv).toEqual(false);
  });
  it('parsing env to boolean correctly when env is true', () => {
    const boolEnv = parseBooleanEnv('true');
    expect(typeof boolEnv).toEqual('boolean');
    expect(boolEnv).toEqual(true);
  });
  it('parsing env to boolean correctly when env is yes', () => {
    const boolEnv = parseBooleanEnv('yes');
    expect(typeof boolEnv).toEqual('boolean');
    expect(boolEnv).toEqual(true);
  });
  it('parsing env to boolean correctly when env is 1', () => {
    const boolEnv = parseBooleanEnv('1');
    expect(typeof boolEnv).toEqual('boolean');
    expect(boolEnv).toEqual(true);
  });
});
