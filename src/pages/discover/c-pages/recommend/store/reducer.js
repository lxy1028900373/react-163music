import * as actionTypes from './constants'; //导入常量

const defaultState={
    topBanners: []
}

function reducer(state= defaultState, action){
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return {...state, topBanners: action.topBanners};
        default:
            return state;
    }
}

export default reducer;