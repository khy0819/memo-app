import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import MemoListPage from './pages/MemoListPage.jsx'
import MemoDetailPage from './pages/MemoDetailPage.jsx'
import MemoFormPage from './pages/MemoFormPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MemoListPage />} />
        <Route path="memos/new" element={<MemoFormPage />} />
        <Route path="memos/:id" element={<MemoDetailPage />} />
        <Route path="memos/:id/edit" element={<MemoFormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
