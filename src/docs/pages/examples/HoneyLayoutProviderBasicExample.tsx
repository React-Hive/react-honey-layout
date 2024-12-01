import React from 'react';

import { HoneyLayoutProvider } from '../../../providers';
import { useHoneyLayout } from '../../../hooks';
import { HoneyBox } from '../../../components';
import theme from './theme';

const Main = () => {
  const { screenState, resolveColor, resolveSpacing } = useHoneyLayout();

  return (
    <HoneyBox as="ol">
      <li>
        Screen State: <pre>{JSON.stringify(screenState, null, 2)}</pre>
      </li>
      <li>resolveColor('neutral.charcoalDark') // {resolveColor('neutral.charcoalDark')}</li>
      <li>resolveSpacing([1, 2.5]) // {resolveSpacing([1, 2.5])}</li>
    </HoneyBox>
  );
};

export const HoneyLayoutProviderBasicExample = () => {
  return (
    <HoneyLayoutProvider theme={theme}>
      <Main />
    </HoneyLayoutProvider>
  );
};