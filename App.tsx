import * as React from 'react';
import { AppInsightsContext } from './AppInsights/AppInsightsContext';
import './style.css';
import { appInsights } from './AppInsights/AppInsightsService';
import Use from './Use';

export default function App() {
  return (
    <AppInsightsContext.Provider value={appInsights}>
      <div>
        <h1>Hello StackBlitz!</h1>
        <Use></Use>
      </div>
    </AppInsightsContext.Provider>
  );
}
