import React from 'react';
import { Box, Theme } from '@radix-ui/themes';
import NavBar from './components/NavBar';
import Pengalaman from './components/Pengalaman';
import TentangSaya from './components/TentangSaya';
import Project from './components/Project';
import HubungiSaya from './components/HubungiSaya';

function App() {
  return (
    <Theme
      panelBackground='translucent'
      appearance='dark'
      accentColor='violet'
      grayColor='sand'
      radius='full'>
      <NavBar />
      <TentangSaya />
      <Pengalaman />
      <Project />
      <HubungiSaya />
    </Theme>
  );
}

export default App;
