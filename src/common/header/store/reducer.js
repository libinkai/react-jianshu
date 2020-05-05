import * as ActionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    headerSearchFocus: false,
    mouseIn: false,
    searchInfoList: [],
    page: 1,
    totalPage: 1
});

export default (preState = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_FOCUS:
            return preState.set('headerSearchFocus', true);
        case ActionTypes.SEARCH_BLUR:
            return preState.set('headerSearchFocus', false);
        case ActionTypes.CHANGE_SEARCH_INFO_LIST:
            return preState.merge({
                searchInfoList:fromJS(action.itemList),
                totalPage:action.totalPage
            });
        case ActionTypes.MOUSE_ENTER:
            return preState.set('mouseIn', true);
        case ActionTypes.MOUSE_LEAVE:
            return preState.set('mouseIn', false);
        case ActionTypes.CHANGE_PAGE:
            return preState.set('page', action.page);
        default:
            return preState;
    }
}