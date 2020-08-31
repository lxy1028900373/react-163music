import React, { memo, useEffect } from 'react';
import {connect} from 'react-redux';

import {getTopBannerAction} from './store/actionCreators';
import { 
    RecommendWrapper,
    // Content,
    // RecommendLeft,
    // RecommendRight
} from './style';

function Recommend(props) {
    const {getBanners, topBanners} = props;

    //发送网络请求
    useEffect(() => {
        getBanners();
    }, [getBanners])

    return (
        <RecommendWrapper>
            <h2>Recommend: {topBanners.length}</h2>
        </RecommendWrapper>
    )
}

const mapStateToProps= state=>({
    topBanners: state.recommend.topBanners
});

const mapDispatchToProps= dispatch=>({
    getBanners: ()=>{
        dispatch(getTopBannerAction())
    }
});

// export default memo(Recommend)
// 返回高阶组件
// 注：使用hook时，可不用connct
export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));