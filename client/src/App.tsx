// import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import MainPage from './Pages/MainPage/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* {!isDraftOpen && <ChatBtn setOpen={setIsDraftOpen} />}
      {isDraftOpen && <Chat toggleReport={setIsDraftOpen} />} */}
      <Routes>
        {/* <Route path='/auth' element={<Auth />} /> */}
        {/* <Route path='/registration' element={<Registration />} /> */}
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App