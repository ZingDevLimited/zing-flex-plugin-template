import { Example } from 'models/example';
import { Action as ReduxAction } from "redux";

export const ACTION_UPDATE_ITEM_LIST = "update_item_list";

export interface Action extends ReduxAction {
    payload?: {
        data: {
            itemList: Example[]
        }
    };
}

export interface ExampleComponentState {
    itemList: Example[];
}

const initialState: ExampleComponentState = {
    itemList: []
};

export class Actions {
    public static updateItemList = (itemList: Example[]): Action => ({ type: ACTION_UPDATE_ITEM_LIST, payload: { data: { itemList } } });
}

export function reduce(state: ExampleComponentState = initialState, action: Action) {
    switch (action.type) {
        case ACTION_UPDATE_ITEM_LIST: {
            console.log("ACTION", state, action)
            return {
                ...state,
                itemList: action.payload?.data.itemList,
            };
        }

        default:
            return state;
    }
}
