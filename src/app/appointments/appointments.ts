import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcDialogComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import baseStyles from '/base-view-styles.css?inline';

defineComponents(IgcListComponent, IgcListItemComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcAvatarComponent, IgcButtonComponent, IgcDialogComponent);

@customElement('app-appointments')
export default class Appointments extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
    }
    .row-layout {
      display: flex;
    }
    .group {
      background-color: rgba(256, 256, 256, 0.6);
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 24px;
      position: relative;
      padding: 32px;
      min-width: 360px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      min-width: 360px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 360px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_3 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
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
    .group_6 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_7 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 0 0 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_8 {
      background-color: rgba(256, 256, 256, 0.6);
      border-color: #CDE0C9;
      border-width: 0px 0px 0px 1px;
      border-style: solid;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 24px;
      position: relative;
      padding: 32px;
      min-width: 360px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_10 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
    }
    .group_11 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_12 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
    }
    .group_13 {
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
    }
    .text {
      color: var(--ig-info-500);
      margin: 0 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .image {
      object-fit: cover;
      height: 28px;
      min-width: 0;
      min-height: 0;
      max-height: 28px;
      flex-shrink: 0;
    }
    .content {
      color: var(--ig-secondary-500);
      height: max-content;
      min-width: min-content;
    }
    .icon {
      color: var(--ig-primary-800);
    }
    .avatar::part(base) {
      color: var(--ig-secondary-400);
      background-color: transparent;
    }
    .text_1 {
      height: max-content;
      min-width: min-content;
    }
    .avatar_1 {
      --ig-size: var(--ig-size-small);
    }
    .icon_1 {
      color: var(--ig-info-500);
    }
    .text_2 {
      color: var(--ig-info-500);
      height: max-content;
      min-width: min-content;
    }
    .avatar_1_1::part(base) {
      color: var(--ig-info-500);
      background-color: transparent;
    }
    .avatar_1_2::part(base) {
      color: var(--ig-info-500);
      background-color: transparent;
    }
    .avatar_1_3::part(base) {
      color: var(--ig-info-500);
      background-color: transparent;
    }
    .icon-button::part(base) {
      color: var(--ig-primary-800);
    }
    .list {
      height: max-content;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .button_1 {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .button_2::part(base) {
      background-color: var(--ig-primary-500);
    }
    .button_1_1::part(base) {
      color: var(--ig-surface-500);
      background-color: var(--ig-error-500);
    }
  `;

  @query('#cancel-appt-dialog')
  private cancelApptDialog?: IgcDialogComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <div class="row-layout group">
        <div class="column-layout group_1">
          <div class="column-layout group_2">
            <div class="row-layout group_3">
              <div class="row-layout group_4">
                <p class="typography__subtitle-2 text">
                  UPCOMING APPOINTMENTS
                </p>
              </div>
            </div>
            <igc-list class="list">
              <igc-list-item>
                <div>
                  <div class="row-layout group_5">
                    <div class="row-layout group_6">
                      <img src="/src/assets/appt-upcoming.svg" class="image" />
                      <div class="column-layout group_7">
                        <p class="typography__subtitle-2 content">
                          Internal Medicine
                        </p>
                        <p class="typography__caption content">
                          Tuesday, January 24, 2023 - 2:30pm - Dr. M. Matthews
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" class="icon-button">
                      <span class="material-icons icon">
                        keyboard_arrow_right
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </div>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div>
                  <div class="row-layout group_5">
                    <div class="row-layout group_6">
                      <img src="/src/assets/appt-upcoming.svg" class="image" />
                      <div class="column-layout group_7">
                        <p class="typography__subtitle-2 content">
                          Dermatology
                        </p>
                        <p class="typography__caption content">
                          Friday, February 24, 2023 - 08:45am - Dr. V. Sawyer
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" class="icon-button">
                      <span class="material-icons icon">
                        keyboard_arrow_right
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </div>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div>
                  <div class="row-layout group_5">
                    <div class="row-layout group_6">
                      <img src="/src/assets/appt-upcoming.svg" class="image" />
                      <div class="column-layout group_7">
                        <p class="typography__subtitle-2 content">
                          Gynaecology
                        </p>
                        <p class="typography__caption content">
                          Monday, March 6, 2023 - 6:30pm - Dr. J. Dean
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" class="icon-button">
                      <span class="material-icons icon">
                        keyboard_arrow_right
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </div>
                </div>
              </igc-list-item>
            </igc-list>
          </div>
          <div class="column-layout group_2">
            <div class="row-layout group_3">
              <div class="row-layout group_4">
                <p class="typography__subtitle-2 text">
                  RECENT
                </p>
              </div>
            </div>
            <igc-list class="list">
              <igc-list-item>
                <div>
                  <div class="row-layout group_5">
                    <div class="row-layout group_6">
                      <img src="/src/assets/appt-past.svg" class="image" />
                      <div class="column-layout group_7">
                        <p class="typography__subtitle-2 content">
                          Oftalmology
                        </p>
                        <p class="typography__caption content">
                          Thursday, January 12, 2023 - Dr. H. Chandler
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" class="icon-button">
                      <span class="material-icons icon">
                        keyboard_arrow_right
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </div>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div>
                  <div class="row-layout group_5">
                    <div class="row-layout group_6">
                      <img src="/src/assets/appt-past.svg" class="image" />
                      <div class="column-layout group_7">
                        <p class="typography__subtitle-2 content">
                          Traumatology
                        </p>
                        <p class="typography__caption content">
                          Friday, December 16, 2022 - Dr. J. Dean
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" class="icon-button">
                      <span class="material-icons icon">
                        keyboard_arrow_right
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </div>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div>
                  <div class="row-layout group_5">
                    <div class="row-layout group_6">
                      <img src="/src/assets/appt-past.svg" class="image" />
                      <div class="column-layout group_7">
                        <p class="typography__subtitle-2 content">
                          Otorhinolaryngology
                        </p>
                        <p class="typography__caption content">
                          Tuesday, December 13, 2022 - Dr. H. McNamara
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" class="icon-button">
                      <span class="material-icons icon">
                        keyboard_arrow_right
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </div>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div>
                  <div class="row-layout group_5">
                    <div class="row-layout group_6">
                      <img src="/src/assets/appt-past.svg" class="image" />
                      <div class="column-layout group_7">
                        <p class="typography__subtitle-2 content">
                          Internal Medicine
                        </p>
                        <p class="typography__caption content">
                          Monday, November 28, 2022 - Dr. M. Matthews
                        </p>
                      </div>
                    </div>
                    <igc-icon-button variant="flat" class="icon-button">
                      <span class="material-icons icon">
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
      <div class="row-layout group_8">
        <div class="column-layout group_1">
          <h6 class="content">
            Dermatology Appointment
          </h6>
          <div class="column-layout group_9">
            <div class="row-layout group_10">
              <igc-avatar src="/src/assets/Avatar4.png" shape="circle" class="avatar"></igc-avatar>
              <div class="column-layout group_11">
                <p class="typography__subtitle-2 text_1">
                  Dr. Michael Matthews
                </p>
                <p class="typography__body-2 text_1">
                  Internal Medicine
                </p>
              </div>
            </div>
            <igc-list class="list">
              <igc-list-item>
                <igc-avatar slot="start" shape="circle" class="avatar_1 avatar_1_1">
                  <span class="material-icons icon_1">
                    calendar_today
                  </span>
                </igc-avatar>
                <div slot="title">Tuesday, January 24, 2023</div>
              </igc-list-item>
              <igc-list-item>
                <igc-avatar slot="start" shape="circle" class="avatar_1 avatar_1_2">
                  <span class="material-icons icon_1">
                    access_time
                  </span>
                </igc-avatar>
                <div slot="title">2:30pm - 2:45pm</div>
              </igc-list-item>
              <igc-list-item>
                <igc-avatar slot="start" shape="circle" class="avatar_1 avatar_1_3">
                  <span class="material-icons icon_1">
                    location_on
                  </span>
                </igc-avatar>
                <div slot="title">Plainsboro Clinic </div>
                <div slot="subtitle">1 Plainsboro Rd. Plainsboro, NJ 08536</div>
              </igc-list-item>
            </igc-list>
          </div>
          <div class="column-layout group_9">
            <p class="typography__subtitle-2 text_2">
              REQUIREMENTS
            </p>
            <div class="column-layout group_12">
              <p class="typography__body-2 content">
                - Recommended shower before appointment.
              </p>
              <p class="typography__body-2 content">
                - Wear loose comfortable clothing.
              </p>
              <p class="typography__body-2 content">
                - Avoid using makeup or nail polish before appointment.
              </p>
              <p class="typography__body-2 content">
                - Don't try any new skin care products in the days prior to your appointment.
              </p>
              <p class="typography__body-2 content">
                - Take your medications as scheduled. Your dermatologist needs to know their effects on your skin.

              </p>
            </div>
          </div>
          <div class="row-layout group_13">
            <igc-button variant="flat" type="button" @click="${() => this.cancelApptDialog?.toggle()}" class="button">
              <span class="material-icons">
                close
              </span>
              <span>CANCEL</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button type="button" class="button button_2">
              <span class="material-icons">
                calendar_today
              </span>
              <span>Add to Calendar</span>
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </div>
      </div>
      <igc-dialog ?close-on-outside-click="${true}" id="cancel-appt-dialog">
        <h5 slot="title">
          Appointment Cancellation
        </h5>
        <p class="typography__body-1 text_1">
          Are you sure you want to cancel your appointment?
        </p>
        <div slot="footer">
          <igc-button variant="flat" type="button" @click="${() => this.cancelApptDialog?.toggle()}" class="button_1">
            No, go back
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" @click="${() => this.cancelApptDialog?.toggle()}" class="button_1 button_1_1">
            Yes, cancel
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </igc-dialog>
    `;
  }
}
