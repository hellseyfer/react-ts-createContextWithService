import {
  ApplicationInsights,
  ITelemetryItem,
} from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
//import appSettings from "../features/settings";

var reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: '',
    extensions: [reactPlugin],
  },
});
appInsights.loadAppInsights();
//this.appInsights.trackPageView();
appInsights.addTelemetryInitializer((env: ITelemetryItem) => {
  env.tags = env.tags || [];
  env.tags['ai.cloud.role'] = 'Canary Teams Extension';
});
export { reactPlugin, appInsights };
