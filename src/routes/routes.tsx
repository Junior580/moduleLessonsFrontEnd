import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from '../pages/homePage/index'
import { LessonPage } from '../pages/lessonPage'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/lessons/:id/' Component={LessonPage} />
      <Route path='/signup' Component={SignUp} />
      <Route path='/login' Component={SignIn} />
    </Routes>
  )
}
