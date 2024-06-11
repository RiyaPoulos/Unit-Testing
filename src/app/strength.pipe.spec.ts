import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display weak if value is 5', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5 (weak)');
  })
  it('should display strong if value is 10', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(10)).toEqual('10 (strong)');
  })
  it('should display strongest if value is 20', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(20)).toEqual('20 (strongest)');
  })

});
