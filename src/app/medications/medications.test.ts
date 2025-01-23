import { expect } from '@open-wc/testing';
import Medications from './medications.js';

describe('Medications', () => {
  it('<app-medications> is an instance of Medications', async () => {
    const element = document.createElement('app-medications');
    expect(element).to.be.instanceOf(Medications);
  });
});
