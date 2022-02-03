import { css, unsafeCSS } from 'lit';
import appCSS from './scss/app.scss';

export const appStyles = css`
  ${unsafeCSS(appCSS)}
`;
