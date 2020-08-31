import React, {memo, Suspense} from 'react';
// import './App.css';
// 导入第三方
import {Provider} from 'react-redux';	//共享store
import {renderRoutes} from 'react-router-config';
// 导入功能性的配置
import routes from './router';
import store from './store';
// 路由
import {HashRouter} from 'react-router-dom';
// 导入组件
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

export default memo(function App(){
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader></AppHeader>
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <AppFooter>AppFooter</AppFooter>
      </HashRouter>
    </Provider>
  )
});
