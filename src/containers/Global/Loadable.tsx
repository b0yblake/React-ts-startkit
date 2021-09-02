import React from 'react';
import loadable from '../../utils/loadable';
import LoadingIndicator from '../../components/Loading';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
