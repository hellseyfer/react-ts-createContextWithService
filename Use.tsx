import * as React from 'react';
import { useAppInsights } from './AppInsights/AppInsightsContext';
import './style.css';

export default function App() {
  const { appInsights } = useAppInsights();
  console.log(appInsights);
  return (
    <div>
      <h1>Hello from nested component</h1>
    </div>
  );
}
