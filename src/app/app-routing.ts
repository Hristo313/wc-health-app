import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './home/home';
import './medications/medications';
import './health-indicators/health-indicators';
import './appointments/appointments';
import './profile/profile';
import './emergency/emergency';

export const routes: Route[] = [
  { path: '', component: 'app-home', name: 'Home' },
  { path: 'home', component: 'app-home', name: 'Home' },
  { path: 'medications', component: 'app-medications', name: 'Medications' },
  { path: 'health-indicators', component: 'app-health-indicators', name: 'Health Indicators' },
  { path: 'appointments', component: 'app-appointments', name: 'Appointments' },
  { path: 'profile', component: 'app-profile', name: 'Profile' },
  { path: 'emergency', component: 'app-emergency', name: 'Emergency' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
