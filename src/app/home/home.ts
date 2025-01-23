import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcIconButtonComponent, IgcRippleComponent);

@customElement('app-home')
export default class Home extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      background-color: rgba(256, 256, 256, 0.6);
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 40px;
      overflow: auto;
      position: relative;
      padding: 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 20px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_2 {
      background-color: #DFA8BB;
      background-image: url("/src/assets/kpi-hrate.svg");
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 13px;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      padding: 20px;
      min-width: 280px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_3 {
      justify-content: space-between;
      align-items: baseline;
      align-content: flex-start;
      position: relative;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: baseline;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      min-width: 50px;
    }
    .group_5 {
      background-color: #C8AFCF;
      background-image: url("/src/assets/kpi-bp.svg");
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 13px;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      padding: 20px;
      min-width: 280px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_6 {
      background-color: #FFBE88;
      background-image: url("/src/assets/kpi-cholesterol.svg");
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 13px;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      padding: 20px;
      min-width: 280px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_7 {
      background-color: #70C3A1;
      background-image: url("/src/assets/kpi-weight.svg");
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 13px;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      padding: 20px;
      min-width: 280px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_8 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 40px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 360px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_10 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
    }
    .group_11 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
    }
    .group_12 {
      border-color: #CDE0C9;
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 0 0 16px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_13 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_14 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 0 0 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .image {
      object-fit: cover;
      width: 28px;
      height: 24px;
      min-width: 0;
      min-height: 0;
      max-width: 28px;
      max-height: 24px;
      flex-shrink: 0;
    }
    .content {
      color: white;
      height: max-content;
      min-width: min-content;
    }
    .image_1 {
      object-fit: cover;
      width: 24px;
      height: 28px;
      min-width: 0;
      min-height: 0;
      max-width: 24px;
      max-height: 28px;
      flex-shrink: 0;
    }
    .image_2 {
      object-fit: cover;
      width: 24px;
      height: 24px;
      min-width: 0;
      min-height: 0;
      max-width: 24px;
      max-height: 24px;
      flex-shrink: 0;
    }
    .text {
      color: var(--ig-info-500);
      margin: 0 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .hyperlink {
      color: var(--ig-primary-900);
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .icon {
      --size: 18px;
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: var(--ig-primary-800);
    }
    .image_3 {
      object-fit: cover;
      height: 26px;
      min-width: 0;
      min-height: 0;
      max-height: 26px;
      flex-shrink: 0;
    }
    .text_1 {
      color: var(--ig-secondary-500);
      height: max-content;
      min-width: min-content;
    }
    .icon_1 {
      color: var(--ig-primary-800);
    }
    .image_4 {
      object-fit: cover;
      height: 28px;
      min-width: 0;
      min-height: 0;
      max-height: 28px;
      flex-shrink: 0;
    }
    .icon-button::part(base) {
      color: var(--ig-primary-800);
    }
    .list {
      height: max-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout group_1">
          <div @click="${() => Router.go(`/health-indicators`)}" class="column-layout group_2">
            <img src="/src/assets/HRate-White.svg" class="image" />
            <p class="typography__subtitle-2 content">
              HEART RATE
            </p>
            <div class="row-layout group_3">
              <div class="row-layout group_4">
                <h4 class="content">
                  82
                </h4>
                <h6 class="content">
                  bpm
                </h6>
              </div>
              <p class="typography__subtitle-2 content">
                +1.12%
              </p>
            </div>
          </div>
          <div @click="${() => Router.go(`/health-indicators`)}" class="column-layout group_5">
            <img src="/src/assets/BPressure-White.svg" class="image_1" />
            <p class="typography__subtitle-2 content">
              BLOOD PRESSURE
            </p>
            <div class="row-layout group_3">
              <div class="row-layout group_4">
                <h4 class="content">
                  140
                </h4>
                <h4 class="content">
                  /
                </h4>
                <h4 class="content">
                  70
                </h4>
                <h6 class="content">
                  mmHg
                </h6>
              </div>
              <p class="typography__subtitle-2 content">
                +1.12%
              </p>
            </div>
          </div>
          <div @click="${() => Router.go(`/health-indicators`)}" class="column-layout group_6">
            <img src="/src/assets/Cholesterol-White.svg" class="image_1" />
            <p class="typography__subtitle-2 content">
              CHOLESTEROL
            </p>
            <div class="row-layout group_3">
              <div class="row-layout group_4">
                <h4 class="content">
                  200
                </h4>
                <h6 class="content">
                  mg/dL
                </h6>
              </div>
              <p class="typography__subtitle-2 content">
                +1.12%
              </p>
            </div>
          </div>
          <div @click="${() => Router.go(`/health-indicators`)}" class="column-layout group_7">
            <img src="/src/assets/Scale-White.svg" class="image_2" />
            <p class="typography__subtitle-2 content">
              WEIGHT
            </p>
            <div class="row-layout group_3">
              <div class="row-layout group_4">
                <h4 class="content">
                  112
                </h4>
                <h6 class="content">
                  lbs
                </h6>
              </div>
              <p class="typography__subtitle-2 content">
                +1.12%
              </p>
            </div>
          </div>
        </div>
        <div class="row-layout group_8">
          <div class="column-layout group_9">
            <div class="row-layout group_10">
              <div class="row-layout group_4">
                <p class="typography__subtitle-2 text">
                  CURRENT MEDICATIONS
                </p>
              </div>
              <div @click="${() => Router.go(`/medications`)}" class="row-layout group_11">
                <a class="typography__body-2 hyperlink">
                  View all
                </a>
                <span class="material-icons icon">
                  arrow_forward
                </span>
              </div>
            </div>
            <igc-list class="list">
              <igc-list-item @click="${() => Router.go(`/medications`)}">
                <div>
                  <div class="row-layout group_12">
                    <div class="row-layout group_13">
                      <img src="/src/assets/Med2.svg" class="image_3" />
                      <div class="column-layout group_14">
                        <p class="typography__subtitle-2 text_1">
                          Calcium 500mg
                        </p>
                        <p class="typography__caption text_1">
                          1 tablet(s), 1 time(s), daily, with meal
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" @click="${() => Router.go(`/medications`)}" class="icon-button">
                      <span class="material-icons icon_1">
                        keyboard_arrow_right
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </div>
                </div>
              </igc-list-item>
              <igc-list-item @click="${() => Router.go(`/medications`)}">
                <div>
                  <div class="row-layout group_12">
                    <div class="row-layout group_13">
                      <img src="/src/assets/Med2.svg" class="image_3" />
                      <div class="column-layout group_14">
                        <p class="typography__subtitle-2 text_1">
                          Hydrolyzed Collagen
                        </p>
                        <p class="typography__caption text_1">
                          2 scoop(s), 1 time(s), daily
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" @click="${() => Router.go(`/medications`)}" class="icon-button">
                      <span class="material-icons icon_1">
                        keyboard_arrow_right
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </div>
                </div>
              </igc-list-item>
              <igc-list-item @click="${() => Router.go(`/medications`)}">
                <div>
                  <div class="row-layout group_12">
                    <div class="row-layout group_13">
                      <img src="/src/assets/Med2.svg" class="image_3" />
                      <div class="column-layout group_14">
                        <p class="typography__subtitle-2 text_1">
                          Vitamin B19 1000mg
                        </p>
                        <p class="typography__caption text_1">
                          1 pill, 2 time(s), weekly, in the morning
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" @click="${() => Router.go(`/medications`)}" class="icon-button">
                      <span class="material-icons icon_1">
                        keyboard_arrow_right
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </div>
                </div>
              </igc-list-item>
              <igc-list-item @click="${() => Router.go(`/medications`)}">
                <div>
                  <div class="row-layout group_12">
                    <div class="row-layout group_13">
                      <img src="/src/assets/Med2.svg" class="image_3" />
                      <div class="column-layout group_14">
                        <p class="typography__subtitle-2 text_1">
                          Vitamin D 100.000 IU
                        </p>
                        <p class="typography__caption text_1">
                          1 capsule, 1 time(s), trimonthly, with main meal
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" @click="${() => Router.go(`/medications`)}" class="icon-button">
                      <span class="material-icons icon_1">
                        keyboard_arrow_right
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </div>
                </div>
              </igc-list-item>
            </igc-list>
          </div>
          <div class="column-layout group_9">
            <div class="row-layout group_10">
              <div class="row-layout group_4">
                <p class="typography__subtitle-2 text">
                  UPCOMING APPOINTMENTS
                </p>
              </div>
              <div @click="${() => Router.go(`/appointments`)}" class="row-layout group_11">
                <a class="typography__body-2 hyperlink">
                  View all
                </a>
                <span class="material-icons icon">
                  arrow_forward
                </span>
              </div>
            </div>
            <igc-list class="list">
              <igc-list-item @click="${() => Router.go(`/appointments`)}">
                <div>
                  <div class="row-layout group_12">
                    <div class="row-layout group_13">
                      <img src="/src/assets/appt-upcoming.svg" class="image_4" />
                      <div class="column-layout group_14">
                        <p class="typography__subtitle-2 text_1">
                          Internal Medicine
                        </p>
                        <p class="typography__caption text_1">
                          Tuesday, January 24, 2023 - 2:30pm - Dr. M. Matthews
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" @click="${() => Router.go(`/appointments`)}" class="icon-button">
                      <span class="material-icons icon_1">
                        keyboard_arrow_right
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </div>
                </div>
              </igc-list-item>
              <igc-list-item @click="${() => Router.go(`/appointments`)}">
                <div>
                  <div class="row-layout group_12">
                    <div class="row-layout group_13">
                      <img src="/src/assets/appt-upcoming.svg" class="image_4" />
                      <div class="column-layout group_14">
                        <p class="typography__subtitle-2 text_1">
                          Dermatology
                        </p>
                        <p class="typography__caption text_1">
                          Friday, February 24, 2023 - 08:45am - Dr. V. Sawyer
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" @click="${() => Router.go(`/appointments`)}" class="icon-button">
                      <span class="material-icons icon_1">
                        keyboard_arrow_right
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </div>
                </div>
              </igc-list-item>
              <igc-list-item @click="${() => Router.go(`/appointments`)}">
                <div>
                  <div class="row-layout group_12">
                    <div class="row-layout group_13">
                      <img src="/src/assets/appt-upcoming.svg" class="image_4" />
                      <div class="column-layout group_14">
                        <p class="typography__subtitle-2 text_1">
                          Gynaecology
                        </p>
                        <p class="typography__caption text_1">
                          Monday, March 6, 2023 - 6:30pm - Dr. J. Dean
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" @click="${() => Router.go(`/appointments`)}" class="icon-button">
                      <span class="material-icons icon_1">
                        keyboard_arrow_right
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </div>
                </div>
              </igc-list-item>
            </igc-list>
          </div>
        </div>
      </div>
    `;
  }
}
