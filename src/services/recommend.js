//recommend下的所有网络请求
import request from './request';

export function getTopBanners(){
    return request({
        url: "/banner"
    })
}