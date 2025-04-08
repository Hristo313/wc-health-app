import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import baseStyles from '/base-view-styles.css?inline';

@customElement('app-emergency')
export default class Emergency extends LitElement {
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
    .demo-content {
      background-color: transparent;
      border-color: var(--ig-gray-400);
      border-width: 2px;
      border-style: dashed;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      position: absolute;
      padding: 64px;
      min-width: 50px;
      min-height: 50px;
    }
    .image {
      object-fit: cover;
      margin: 0 0 24px;
      min-width: 0;
      min-height: 0;
      max-width: 280px;
      flex-shrink: 0;
    }
    .h5 {
      color: var(--ig-info-500);
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .text {
      text-align: center;
      color: var(--ig-gray-700);
      margin: 0 0 24px;
      height: max-content;
      min-width: min-content;
      max-width: 320px;
    }
  `;

  render() {
    return html`
      <style>${unsafeCSS(baseStyles)}</style>
      <div class="column-layout demo-content">
        <img src="/src/assets/start-building.svg" class="image" />
        <h5 class="h5">
          Start building!
        </h5>
        <p class="typography__body-1 text">
          Remove the "demo-content" container, and add your own content.
        </p>
      </div>
    `;
  }
}
