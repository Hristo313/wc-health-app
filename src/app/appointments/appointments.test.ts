import { expect } from '@open-wc/testing';
import Appointments from './appointments.js';

describe('Appointments', () => {
  it('<app-appointments> is an instance of Appointments', async () => {
    const element = document.createElement('app-appointments');
    expect(element).to.be.instanceOf(Appointments);
  });
});
