import React from 'react';
import {Redirect} from 'react-router-dom';


const Discover = React.lazy(_ => import('@/pages/discover'));
const HYRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const HYRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
const HYSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const HYDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const HYArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const HYAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));

const Friend =  React.lazy(_ => import("@/pages/friend"));
const Mine =  React.lazy(_ => import("@/pages/mine"));

const routes =[
    {
        path: "/",
        exact: true,
        render: () =>(
            <Redirect to="/discover" />
        )
    },
    {
        path: "/discover",
        component: Discover,
        routes: [
            {
              path: "/discover",
              exact: true,
              render: () => (
                <Redirect to="/discover/recommend"/>
              )
            },
            {
              path: "/discover/recommend",
              component: HYRecommend
            },
            {
              path: "/discover/ranking",
              component: HYRanking
            },
            {
              path: "/discover/songs",
              component: HYSongs
            },
            {
              path: "/discover/djradio",
              exact: true,
              component: HYDjradio
            },
            {
              path: "/discover/artist",
              component: HYArtist
            },
            {
              path: "/discover/album",
              component: HYAlbum
            }
        ]
    },
    {
        path: "/mine",
        exact: true,
        component: Mine
    },
    {
        path: "/friend",
        exact: true,
        component: Friend
    },
];

export default routes;