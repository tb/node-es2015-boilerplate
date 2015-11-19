import 'babel-polyfill';
import {expect} from 'chai';
import Speaker from './speaker';

describe('Speaker', () => {
  let speaker;
  beforeEach(() => {
    speaker = new Speaker('Tom');
  });

  it("should have name 'Tom'", () => {
    expect(speaker.name).to.equal('Tom');
  });

  it("should say 'Hello!'", () => {
    expect(speaker.say('Hello!')).to.equal('Tom: Hello!');
  });
});
