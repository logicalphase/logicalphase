import { CDN_HOST_URL } from "./config";

import { html, css, unsafeCSS } from "lit-element";
import { PageViewElement } from "./page-view-element.js";
import { updateMetadata } from "pwa-helpers/metadata.js";

import "./ts-sidebar-nav";

import { SharedStyles } from "./ts-style-shared";
import { TsTypographyStyle } from "./ts-style-typography";
import { TsLayoutStyle } from "./ts-style-layout";
import { TsGridStyle } from "./ts-style-grid";
import { TsCard } from "./ts-style-card";
import { TsButtonStyle } from "./ts-style-button";

const cdnHost = unsafeCSS(CDN_HOST_URL);

class TSSecurity extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TsTypographyStyle,
      TsLayoutStyle,
      TsGridStyle,
      TsCard,
      TsButtonStyle,
      css`
      :host {
        display: block;
        padding: 0px;
      }

      /* Smaller than 460 */
      .hero {
        background: var(--app-reverse-text-color) url('/images/header/ts-security-header-opt.svg') no-repeat;
        background-size: 384px;
        background-position: 93% 80px;
      }
      .ts-section {
          padding-top: 0px;
      }
      img.ts-content-grid-image, 
      img.ts-content-grid-image-lower {
        height: auto;
        max-width: 100%;
        width: 100%;
      }
      .ts-grid__col--horizontal-center {
        justify-self: normal;
      }
      @media (min-width: 460px) {

        h3 {
          padding-top: 20px; 
        }
        img.ts-content-grid-image, 
        img.ts-content-grid-image-lower {
          height: auto;
          max-width: 100%;
          width: 82%;
        }

        .content-set p {
          max-width: 600px;
        }

        section.ts-copy {
          margin: 0;
        }

        .ts-content-grid-image-lower {
          margin-top: 36px;
          margin-bottom: 36px;
        }

        .ts-grid-row-start {
          grid-row-start: 1;
        }
        .ts-section {
          padding-top: 40px;
        }
      }

      @media (max-width: 800px) {
        .hero {
          background: none;
          }
        .ts-content-grid-image-lower {
          margin-top: 36px;
          margin-bottom: 36px;
        }
      }   
      `
    ];
  }

  render() {
    updateMetadata({
      title: 'Security Solutions - HyperPress',
      description: 'Defense in depth security that protect data and reputations'
    });

    return html`
      <div class="hypersite-main-content clearfix">
        <article id="ts-site" class="ts-design">
          <header class="ts-hero hero">
            <div class="ts-grid">
              <div class="ts-grid__column is-7 is-6__large is-1__large--offset">
                <header class="ts-grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="ts-section-header__eyebrow ts-eyebrow">WordPress Security</h1>
                    <h2 class="ts-display3">Security Incident Response Team</h2>
                    <p class="ts-headline4 ts-why-google__intro-text">Hacked site restoration and defense in depth security protection program.</p>
                    <div class="ts-section-header__link">
                      <a 
                        href="/contact/" 
                        class="ts-button ts-button--primary" 
                        track-type="navigateTo" 
                        track-name="pageSpeed"
                        track-metadata-position="banner">Contact a WordPress Pro</a>
                    </div>
                  </div>
                </header>
              </div>
              <div class="cloud-grid__col is-5"></div>
            </div>
          </header>
          <div class="ts-section ts-section--border">
            <div class="ts-section__spacer">
              <section class="ts-copy">
                <div class="ts-grid--alternate ts-copy__inner ts-copy--60-40 ts-grid-row-start">
                  <div class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset ts-grid-row-start">
                    <img class="ts-content-grid-image" src="https://hyperpress.app/images/content/ts-pagespeed-ms-to-dollars-200x200-opt.svg" alt="WordPress PageSpeed Optimizations" />
                  </div>
                  <div class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large ts-grid-row-start">
                    <h3 class="ts-headline3" id="engaging-experiences-regardless-screen-size">Milliseconds Matter</h3>
                    <p>You've spent time and money building a WordPress site you can be proud of, but a slow site can undo all that hard work and hurt more than it helps. We've optimized hundreds of WordPress sites of all sizes and stripes. We know what slows WordPress down and how to make it lightning fast across all devices. Need help?</p> 
                    <p><a href="/contact" track-type="navigateTo" track-type="pageSpeed" track-metadata-position="banner">WordPress PageSpeed Optimization</a>.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="ts-section ts-section--border">
            <div class="ts-section__spacer">
              <section class="ts-copy">
                <div class="ts-grid--alternate ts-copy__inner ts-copy--60-40" >
                  <div class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset ts-grid-row-start">
                    <img class="ts-content-grid-image-lower" src="/images/content/ts-pagespeed-screen-200x200-opt.svg" alt="When it comes to page loading, time really is money!" />
                  </div>
                  <div class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large ts-grid-row-start">
                    <h3 class="ts-headline3" id="hyperpress-increases-traffic-conversions">WordPress PageSpeed Optimization</h3>
                    <p>We identify performance bottlenecks, create a prioritized plan of action, and fix what's slowing your site down. We provide a complete post-optimization site report that explains all changes we make and tips on how to keep your site super fast and Google Search friendly.</p>
                    <h4 class="paper-font-subhead">Optimization Service includes:</h4>
                    <ul class="body-checks">
                      <li class="ts-icon">Multiple diagnostic tests</li>
                      <li>Image compression</li>
                      <li>Optimized server and client caching</li>
                      <li>Script and CSS minification</li>
                      <li>Defer order of script loading</li>            
                      <li>Connect to CDN of your choice (optional)</li>
                      <li>7 day follow up exam with adjustments</li>
                      <li>Bi-annual check-up and site health check</li>
                    </ul>
                    <div class="ts-content-header__link ts-element-align">
                      <a 
                        href="/contact/" 
                        class="ts-button ts-button--primary ts-content-button ts-element-display" 
                        track-type="navigateTo" 
                        track-name="Pagespeed"
                        track-metadata-position="banner">Optimize My WordPress Site!</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="ts-section ts-section--border">
            <div class="ts-section__header ts-text-center ts-grid">
              <div class="ts-grid__col is-12 is-10__large is-1__large--offset">
                <h2 class="ts-headline3" id="features">HyperPress Features</h2>
              </div>
            </div>
          </div>
        </article>
      </div>
    `;
  }
}
window.customElements.define("ts-security", TSSecurity);
