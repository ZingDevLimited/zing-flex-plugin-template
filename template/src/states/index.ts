import { AppState as FlexAppState } from '@twilio/flex-ui';
import { combineReducers } from 'redux';

import { ExampleComponentState, reduce as ExampleComponentReducer } from './ExampleComponentState';

// Register your redux store under a unique namespace
export const namespace = 'zing-template';

// Register all component states under the namespace
export interface AppState extends FlexAppState {
    'zing-template': {
        exampleComponent: ExampleComponentState,
        // Other states
    }
}

// Combine the reducers
export default combineReducers({
    exampleComponent: ExampleComponentReducer
});
