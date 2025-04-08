import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IgcCategoryChartModule } from '@infragistics/igniteui-webcomponents-charts';
import { ModuleManager } from '@infragistics/igniteui-webcomponents-core';
import { CholesterolHDLLDLType } from '../models/PatientDashboard/cholesterol-hdlldltype';
import { BPSystolicDiastolicType } from '../models/PatientDashboard/bpsystolic-diastolic-type';
import { TotalCholesterolType } from '../models/PatientDashboard/total-cholesterol-type';
import { WeightType } from '../models/PatientDashboard/weight-type';
import { HeartRateType } from '../models/PatientDashboard/heart-rate-type';
import { GlucoseType } from '../models/PatientDashboard/glucose-type';
import { patientDashboardService } from '../services/PatientDashboard-service';
import baseStyles from '/base-view-styles.css?inline';

ModuleManager.register(IgcCategoryChartModule);

@customElement('app-health-indicators')
export default class HealthIndicators extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
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
      overflow: auto;
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
      gap: 16px;
      position: relative;
      min-width: 360px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_2 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 32px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_3 {
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
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: baseline;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      min-width: 50px;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 150px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .text {
      color: var(--ig-info-500);
      margin: 0 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .image {
      object-fit: cover;
      height: 24px;
      min-width: 0;
      min-height: 0;
      max-height: 24px;
      flex-shrink: 0;
    }
    .text_1 {
      color: var(--ig-secondary-300);
      margin: 0 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .h6 {
      color: var(--ig-secondary-500);
      height: max-content;
      min-width: min-content;
    }
    .text_2 {
      color: var(--ig-secondary-200);
      height: max-content;
      min-width: min-content;
    }
    .h6_1 {
      color: var(--ig-secondary-100);
      height: max-content;
      min-width: min-content;
    }
    .category-chart {
      --brushes: #70C3A1;
      --outlines: #70C3A1;
      --marker-brushes: #70C3A1;
      --marker-outlines: #70C3A1;
      min-height: 200px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .category-chart_1 {
      --brushes: #E7B7C8;
      --outlines: #E7B7C8;
      --marker-brushes: #E7B7C8;
      --marker-outlines: #E7B7C8;
      min-height: 200px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .category-chart_2 {
      --brushes: #CDB3D4 #AE91B6;
      --outlines: #CDB3D4 #AE91B6;
      --marker-brushes: #CDB3D4 #AE91B6;
      --marker-outlines: #CDB3D4 #AE91B6;
      min-height: 200px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .category-chart_3 {
      --brushes: #FFBE88;
      --outlines: #FFBE88;
      --marker-brushes: #FFBE88;
      --marker-outlines: #FFBE88;
      min-height: 200px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .category-chart_4 {
      --brushes: #74C2A3 #DFA8BB;
      --outlines: #74C2A3 #DFA8BB;
      --marker-brushes: #74C2A3 #DFA8BB;
      --marker-outlines: #74C2A3 #DFA8BB;
      min-height: 200px;
      flex-grow: 1;
      flex-shrink: 0;
    }
  `;

  constructor() {
    super();
    patientDashboardService.getWeightList().then(data => this.patientDashboardWeight = data);
    patientDashboardService.getHeartRateList().then(data => this.patientDashboardHeartRate = data);
    patientDashboardService.getBPSystolicDiastolicList().then(data => this.patientDashboardBPSystolicDiastolic = data);
    patientDashboardService.getGlucoseList().then(data => this.patientDashboardGlucose = data);
    patientDashboardService.getTotalCholesterolList().then(data => this.patientDashboardTotalCholesterol = data);
    patientDashboardService.getCholesterolHDLLDLList().then(data => this.patientDashboardCholesterolHDLLDL = data);
  }

  @state()
  private patientDashboardWeight: WeightType[] = [];

  @state()
  private patientDashboardHeartRate: HeartRateType[] = [];

  @state()
  private patientDashboardBPSystolicDiastolic: BPSystolicDiastolicType[] = [];

  @state()
  private patientDashboardGlucose: GlucoseType[] = [];

  @state()
  private patientDashboardTotalCholesterol: TotalCholesterolType[] = [];

  @state()
  private patientDashboardCholesterolHDLLDL: CholesterolHDLLDLType[] = [];

  render() {
    return html`
      <style>${unsafeCSS(baseStyles)}</style>
      <div class="row-layout group">
        <div class="column-layout group_1">
          <p class="typography__subtitle-2 text">
            HEALTH INDICATORS
          </p>
          <div class="row-layout group_2">
            <div class="column-layout group_3">
              <div class="column-layout group_4">
                <div class="row-layout group_5">
                  <img src="/src/assets/Scale_Color.svg" class="image" />
                  <div class="row-layout group_6">
                    <p class="typography__subtitle-2 text_1">
                      WEIGHT
                    </p>
                    <h6 class="h6">
                      112
                    </h6>
                    <p class="typography__subtitle-2 text_2">
                      lbs
                    </p>
                  </div>
                </div>
                <div class="column-layout group_7">
                  <igc-category-chart .dataSource="${this.patientDashboardWeight}" chart-type="column" y-axis-interval="10" y-axis-minimum-value="95" y-axis-maximum-value="125" computed-plot-area-margin-mode="series" class="category-chart"></igc-category-chart>
                </div>
              </div>
              <div class="column-layout group_4">
                <div class="row-layout group_5">
                  <img src="/src/assets/HRate_Color.svg" class="image" />
                  <div class="row-layout group_6">
                    <p class="typography__subtitle-2 text_1">
                      HEART RATE
                    </p>
                    <h6 class="h6">
                      90
                    </h6>
                    <p class="typography__subtitle-2 text_2">
                      bpm
                    </p>
                  </div>
                </div>
                <div class="column-layout group_7">
                  <igc-category-chart .dataSource="${this.patientDashboardHeartRate}" chart-type="line" y-axis-interval="10" y-axis-minimum-value="60" y-axis-maximum-value="90" computed-plot-area-margin-mode="series" class="category-chart_1"></igc-category-chart>
                </div>
              </div>
            </div>
            <div class="column-layout group_3">
              <div class="column-layout group_8">
                <div class="row-layout group_5">
                  <img src="/src/assets/BPressure_Color.svg" class="image" />
                  <div class="row-layout group_6">
                    <p class="typography__subtitle-2 text_1">
                      BLOOD PRESSURE
                    </p>
                    <h6 class="h6">
                      140
                    </h6>
                    <h6 class="h6_1">
                      /
                    </h6>
                    <h6 class="h6">
                      70
                    </h6>
                    <p class="typography__subtitle-2 text_2">
                      mmHg
                    </p>
                  </div>
                </div>
                <div class="column-layout group_7">
                  <igc-category-chart .dataSource="${this.patientDashboardBPSystolicDiastolic}" chart-type="line" y-axis-interval="20" y-axis-minimum-value="70" y-axis-maximum-value="160" computed-plot-area-margin-mode="series" class="category-chart_2"></igc-category-chart>
                </div>
              </div>
              <div class="column-layout group_8">
                <div class="row-layout group_5">
                  <img src="/src/assets/blood-sugar.svg" class="image" />
                  <div class="row-layout group_6">
                    <p class="typography__subtitle-2 text_1">
                      BLOOD SUGAR
                    </p>
                    <h6 class="h6">
                      85
                    </h6>
                    <p class="typography__subtitle-2 text_2">
                      mg/dL
                    </p>
                  </div>
                </div>
                <div class="column-layout group_7">
                  <igc-category-chart .dataSource="${this.patientDashboardGlucose}" chart-type="area" y-axis-interval="5" y-axis-minimum-value="80" y-axis-maximum-value="100" computed-plot-area-margin-mode="series" class="category-chart_1"></igc-category-chart>
                </div>
              </div>
            </div>
            <div class="column-layout group_3">
              <div class="column-layout group_8">
                <div class="row-layout group_5">
                  <img src="/src/assets/Cholesterol_Color.svg" class="image" />
                  <div class="row-layout group_6">
                    <p class="typography__subtitle-2 text_1">
                      TOTAL CHOLESTEROL
                    </p>
                    <h6 class="h6">
                      200
                    </h6>
                    <p class="typography__subtitle-2 text_2">
                      mg/dL
                    </p>
                  </div>
                </div>
                <div class="column-layout group_7">
                  <igc-category-chart .dataSource="${this.patientDashboardTotalCholesterol}" chart-type="area" y-axis-interval="20" y-axis-minimum-value="160" y-axis-maximum-value="230" computed-plot-area-margin-mode="series" class="category-chart_3"></igc-category-chart>
                </div>
              </div>
              <div class="column-layout group_8">
                <div class="row-layout group_5">
                  <img src="/src/assets/Cholesterol_Color.svg" class="image" />
                  <div class="row-layout group_6">
                    <p class="typography__subtitle-2 text_1">
                      CHOLESTEROL HDL / LDL
                    </p>
                    <h6 class="h6">
                      80
                    </h6>
                    <p class="typography__subtitle-2 text_2">
                      mg/dL
                    </p>
                    <h6 class="h6_1">
                      -
                    </h6>
                    <h6 class="h6">
                      85
                    </h6>
                    <p class="typography__subtitle-2 text_2">
                      mg/dL
                    </p>
                  </div>
                </div>
                <div class="column-layout group_7">
                  <igc-category-chart .dataSource="${this.patientDashboardCholesterolHDLLDL}" chart-type="spline" y-axis-interval="20" y-axis-minimum-value="50" y-axis-maximum-value="150" computed-plot-area-margin-mode="series" class="category-chart_4"></igc-category-chart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
