import { AppState } from '../../states';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Actions } from '../../states/ExampleComponentState';
import ExampleComponent from './ExampleComponent';
import { Example } from 'models/example';

export interface StateToProps {
    itemList: Example[];
}

export interface DispatchToProps {
    updateItemList: (itemList: Example[]) => void;
}

const mapStateToProps = (state: AppState): StateToProps => ({
    itemList: state['zing-template'].exampleComponent.itemList,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchToProps => ({
    updateItemList: bindActionCreators(Actions.updateItemList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
