import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {useMemo} from 'react';
import * as ActionCreators from '../store/actions';
import {AppDispatch} from '../store';

// export const useActions = () => {
//   const dispatch: AppDispatch = useDispatch<AppDispatch>();
//   return useMemo(
//     () => bindActionCreators(ActionCreators, dispatch),
//     [dispatch],
//   );
// };
