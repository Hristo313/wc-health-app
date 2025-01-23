import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcAvatarComponent, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcAvatarComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcNavDrawerComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .main-navigation {
      border-color: #BDD2B9;
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 1rem;
      overflow: hidden;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      overflow: hidden;
      position: relative;
      min-width: 50px;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .bottom-container {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .navbar {
      background-color: #F0F6EF;
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      flex-grow: 1;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      max-width: 236px;
      flex-shrink: 0;
    }
    .nav-drawer::part(main) {
      width: 236px;
    }
    .icon-button::part(base) {
      color: var(--ig-primary-900);
    }
    .image {
      object-fit: cover;
      height: 32px;
      min-width: 0;
      min-height: 0;
      max-height: 32px;
      flex-shrink: 0;
    }
    .text {
      color: var(--ig-secondary-400);
      height: max-content;
      min-width: min-content;
    }
    .avatar::part(base) {
      background-color: transparent;
    }
    .icon {
      color: var(--ig-primary-900);
    }
    .icon_1 {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: var(--ig-primary-700);
    }
  `;

  @query('#nav-drawer')
  private navDrawer?: IgcNavDrawerComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout main-navigation">
        <igc-navbar class="navbar">
          <div class="row-layout group">
            <div @click="${() => Router.go(`/home`)}" class="row-layout group_1">
              <img src="/src/assets/logo2.svg" class="image" />
              <p class="typography__subtitle-2 text">
                HEALTHCARE ASSISTANT
              </p>
            </div>
          </div>
          <div slot="end" class="row-layout group_2">
            <div class="row-layout group_1">
              <igc-avatar src="/src/assets/Avatar13.png" shape="circle" class="avatar"></igc-avatar>
              <p class="typography__subtitle-2 text">
                Sandy Anderson
              </p>
            </div>
            <igc-icon-button variant="flat" @click="${() => this.navDrawer?.toggle()}" class="icon-button">
              <span class="material-icons icon">
                menu
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </div>
        </igc-navbar>
      </div>
      <div class="row-layout bottom-container">
        <router-outlet class="view-container"></router-outlet>
        <igc-nav-drawer position="end" id="nav-drawer" class="nav-drawer">
          <igc-nav-drawer-item @click="${() => Router.go(`/home`)}">
            <span slot="icon">
              <span class="material-icons icon_1">
                home
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Home</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/medications`)}">
            <span slot="icon">
              <span class="material-icons icon_1">
                healing
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Medications</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/health-indicators`)}">
            <span slot="icon">
              <span class="material-icons icon_1">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Health Indicators</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/appointments`)}">
            <span slot="icon">
              <span class="material-icons icon_1">
                calendar_today
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Appointments</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/profile`)}">
            <span slot="icon">
              <span class="material-icons icon_1">
                account_circle
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Medical Profile</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/emergency`)}">
            <span slot="icon">
              <span class="material-icons icon_1">
                error
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Emergency</div>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
