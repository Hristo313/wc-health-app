import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import baseStyles from '/base-view-styles.css?inline';

defineComponents(IgcListComponent, IgcListItemComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcButtonComponent);

@customElement('app-medications')
export default class Medications extends LitElement {
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
      gap: 32px;
      position: relative;
      width: 657px;
      min-width: 360px;
      min-height: 50px;
      max-width: 657px;
    }
    .group_10 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_11 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_12 {
      background-color: #F0F6EF;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 0 8px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_13 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_14 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_15 {
      justify-content: flex-start;
      align-items: baseline;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
    }
    .group_16 {
      justify-content: flex-end;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
    }
    .text {
      color: var(--ig-info-500);
      margin: 0 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .image {
      object-fit: cover;
      height: 26px;
      min-width: 0;
      min-height: 0;
      max-height: 26px;
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
    .text_1 {
      color: var(--ig-secondary-400);
      height: max-content;
      min-width: min-content;
    }
    .text_2 {
      color: var(--ig-info-500);
      height: max-content;
      min-width: min-content;
    }
    .hyperlink {
      color: var(--ig-primary-900);
      height: max-content;
      min-width: min-content;
    }
    .text_3 {
      color: var(--ig-secondary-400);
      height: max-content;
      min-width: 120px;
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
    .button_1::part(base) {
      background-color: var(--ig-primary-500);
    }
  `;

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
                  CURRENT MEDICATIONS
                </p>
              </div>
            </div>
            <igc-list class="list">
              <igc-list-item>
                <div>
                  <div class="row-layout group_5">
                    <div class="row-layout group_6">
                      <img src="/src/assets/Med2.svg" class="image" />
                      <div class="column-layout group_7">
                        <p class="typography__subtitle-2 content">
                          Calcium 500mg
                        </p>
                        <p class="typography__caption content">
                          1 tablet(s), 1 time(s), daily, with meal
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
                      <img src="/src/assets/Med2.svg" class="image" />
                      <div class="column-layout group_7">
                        <p class="typography__subtitle-2 content">
                          Hydrolyzed Collagen
                        </p>
                        <p class="typography__caption content">
                          2 scoop(s), 1 time(s), daily
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
                      <img src="/src/assets/Med2.svg" class="image" />
                      <div class="column-layout group_7">
                        <p class="typography__subtitle-2 content">
                          Vitamin B19 1000mg
                        </p>
                        <p class="typography__caption content">
                          1 pill, 2 time(s), weekly, in the morning
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
                      <img src="/src/assets/Med2.svg" class="image" />
                      <div class="column-layout group_7">
                        <p class="typography__subtitle-2 content">
                          Vitamin D 100.000 IU
                        </p>
                        <p class="typography__caption content">
                          1 capsule, 1 time(s), trimonthly, with main meal
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
                  EXPIRED PRESCRIPTIONS
                </p>
              </div>
            </div>
            <igc-list class="list">
              <igc-list-item>
                <div>
                  <div class="row-layout group_5">
                    <div class="row-layout group_6">
                      <img src="/src/assets/meds-expired.svg" class="image" />
                      <div class="column-layout group_7">
                        <p class="typography__subtitle-2 content">
                          Hypersol B Nasal Spray
                        </p>
                        <p class="typography__caption content">
                          1 spray, 3 time(s) / day, each nostril, for 7 days
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
                      <img src="/src/assets/meds-expired.svg" class="image" />
                      <div class="column-layout group_7">
                        <p class="typography__subtitle-2 content">
                          Prednisone 20mg
                        </p>
                        <p class="typography__caption content">
                          1 tablet, 2 time(s) / day, with food, for 7 days
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
        <div class="column-layout group_9">
          <h6 class="content">
            Calcium 500mg
          </h6>
          <div class="row-layout group_10">
            <div class="column-layout group_11">
              <p class="typography__overline text_1">
                DOSAGE
              </p>
              <div class="row-layout group_10">
                <div class="row-layout group_12">
                  <p class="typography__subtitle-2 text_1">
                    1
                  </p>
                </div>
                <div class="row-layout group_12">
                  <p class="typography__subtitle-2 text_1">
                    tablet
                  </p>
                </div>
              </div>
            </div>
            <div class="column-layout group_11">
              <p class="typography__overline text_1">
                FREQUENCY
              </p>
              <div class="row-layout group_10">
                <div class="row-layout group_12">
                  <p class="typography__subtitle-2 text_1">
                    1 time(s)
                  </p>
                </div>
                <div class="row-layout group_12">
                  <p class="typography__subtitle-2 text_1">
                    daily
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column-layout group_13">
            <p class="typography__subtitle-2 text_2">
              INDICATIONS
            </p>
            <p class="typography__body-2 content">
              Take by mouth with breakfast.
            </p>
            <p class="typography__body-2 content">
              Gador Calcium 500 mg Tablets are Calcium supplements formulated to help support bone strength. Sourced from high quality ingredients, these gluten free Nature Made Calcium 500 mg contain no color added and no artificial flavors. This gluten free Calcium supplement is perfect for adults who are low in Calcium or want an additional dietary supplement with their diet. Adults, take one of these Calcium tablet bone supplements 1 to 2 times daily with water and a meal.
            </p>
            <a class="typography__body-2 hyperlink">
              + View more information
            </a>
          </div>
          <div class="column-layout group_13">
            <p class="typography__subtitle-2 text_2">
              PRESCRIPTION INFO
            </p>
            <div class="column-layout group_14">
              <div class="row-layout group_15">
                <p class="typography__subtitle-2 text_3">
                  Refills Left:
                </p>
                <p class="typography__body-2 content">
                  4
                </p>
              </div>
              <div class="row-layout group_15">
                <p class="typography__subtitle-2 text_3">
                  Last Refill:
                </p>
                <p class="typography__body-2 content">
                  1/10/2023
                </p>
              </div>
              <div class="row-layout group_15">
                <p class="typography__subtitle-2 text_3">
                  Prescribed by:
                </p>
                <p class="typography__body-2 content">
                  Dr. Robert Stevens
                </p>
              </div>
            </div>
          </div>
          <div class="row-layout group_16">
            <igc-button variant="flat" type="button" class="button">
              <span class="material-icons">
                alarm_add
              </span>
              <span>Set reminder</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button type="button" class="button button_1">
              <span class="material-icons">
                replay
              </span>
              <span>REQUEST REFILL</span>
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </div>
      </div>
    `;
  }
}
