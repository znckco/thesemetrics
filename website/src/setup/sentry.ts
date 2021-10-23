import * as Sentry from '@sentry/browser'

if (__USE_SENTRY__) {
  Sentry.init({
    dsn: 'https://cfe32af78b1a45b8b01930684aafb964@o425642.ingest.sentry.io/5363724',
    release: __VERSION__,
    environment: location.hostname.includes('netlify.app')
      ? 'staging'
      : location.hostname,
  })
}
