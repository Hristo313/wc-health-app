import { expect } from '@open-wc/testing';
import HealthIndicators from './health-indicators.js';

describe('HealthIndicators', () => {
  it('<app-health-indicators> is an instance of HealthIndicators', async () => {
    const element = document.createElement('app-health-indicators');
    expect(element).to.be.instanceOf(HealthIndicators);
  });
});
