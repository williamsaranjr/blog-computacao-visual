import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { PostDetail } from './pages/PostDetail'

function NotFound() {
  return (
    <section>
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar para o início</Link>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:key" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
