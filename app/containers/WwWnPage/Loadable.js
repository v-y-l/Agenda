/**
 *
 * Asynchronously loads the component for WwWnPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
