import * as ActionTypes from './actionTypes';
import axios from 'axios';

const changeSearchInfoList = (itemList) => ({
    type: ActionTypes.CHANGE_SEARCH_INFO_LIST,
    itemList,
    totalPage: Math.ceil(itemList.length / 10)
});

export const searchFocus = () => ({
    type: ActionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: ActionTypes.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: ActionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: ActionTypes.MOUSE_LEAVE
});

export const changePage = (page) =>({
    type: ActionTypes.CHANGE_PAGE,
    page
})

export const getSearchInfoList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            dispatch(changeSearchInfoList(res.data.data));
        }).catch((e) => {
            console.log('error ...');
        })
    }
}