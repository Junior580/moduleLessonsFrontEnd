import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from '../pages/homePage/index'
import { LessonPage } from '../pages/lessonPage'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/lessons/:id/' Component={LessonPage} />
    </Routes>
  )
}
