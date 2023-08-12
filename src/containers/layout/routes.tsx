import { Routes, Route } from 'react-router-dom'
import Layout from '../containers/layout/Layout'
import Home from '../pages/home/home'
import UploadFiles from '../pages/upload_files/upload'

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload-files' element={<UploadFiles />} />
      </Routes>
    </Layout>
  )
}

export default AppRoutes
