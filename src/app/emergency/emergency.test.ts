import { expect } from '@open-wc/testing';
import Emergency from './emergency.js';

describe('Emergency', () => {
  it('<app-emergency> is an instance of Emergency', async () => {
    const element = document.createElement('app-emergency');
    expect(element).to.be.instanceOf(Emergency);
  });
});
