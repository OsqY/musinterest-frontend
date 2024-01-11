import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from "./navbar/NavBar"
import Home from "./home/Home"
import DiscussionCard from './discussions/DiscussionCard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AlbumDetails from './album/AlbumDetails'
import SearchAlbumParams from './album/SearchAlbumParams'
import LoginPage from './auth/login/Login'
import RegisterPage from './auth/sign-up/SignUp'
import CreateDisussionForm from './discussions/CreateDiscussionForm'
import DiscussionsPage from './discussions/DiscussionsPage'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path='/' element={<><Home />
            <SearchAlbumParams /> </>} />
          <Route path='/discussions' element={<DiscussionsPage />} />
          <Route path='/albums/:id' element={<AlbumDetails />} />
          <Route path='/create-discussion' element={<CreateDisussionForm />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
