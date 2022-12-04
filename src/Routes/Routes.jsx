import React from "react"
import { Route, Routes } from "react-router-dom"

import Home from '../Pages/Home/Home'
import Repos from '../Pages/Repos'
import Followers from '../Pages/Followers'
import Followings from '../Pages/Followings'
import NotFound from '../Pages/NotFound'


export default function RoutesWrapper() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/repositories" element={<Repos/>}/>
        <Route path="/followers" element={<Followers/>}/>
        <Route path="/following" element={<Followings/>}/>
        <Route path="/NotFound" element={<NotFound/>} />
    </Routes>
  )
}