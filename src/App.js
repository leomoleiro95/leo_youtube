import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Feed, ChannelDetail, VideoDetail, SearchFeed } from './components';



const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/leo_youtube" exact element={<Feed />} />
        <Route path="leo_youtube/video/:id" element={<VideoDetail />} />
        <Route path="leo_youtube/channel/:id" element={<ChannelDetail />} />
        <Route path="leo_youtube/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);


export default App
