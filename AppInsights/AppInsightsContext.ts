import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { createContext, useContext } from 'react';

export type ProviderValue = ApplicationInsights;
export type DefaultValue = undefined;
export type ContextValue = DefaultValue | ProviderValue;

export const AppInsightsContext = createContext<ContextValue>(undefined);
export const useAppInsights = () => useContext(AppInsightsContext);
