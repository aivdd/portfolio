import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  TabNav,
  Text,
  Tooltip,
} from '@radix-ui/themes';

const NavButton = () => {
  return (
    <>
      <Link href='#tentang-saya'>Tentang saya</Link>
      <Link href='#pengalaman'>Pengalaman</Link>
      <Link href='#project'>Projects</Link>
      <Link href='#hubungi-saya'>Hubungi Saya</Link>
    </>
  );
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <nav className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
    <TabNav.Root
      wrap='wrap'
      justify='center'
      style={{ backgroundColor: 'var(--gray-2)' }}>
      <Container p={{ initial: '4', md: '0' }}>
        <Flex direction='row' justify='between' align='center' padding='3'>
          <Tooltip content='Kunjungi halaman GitHub'>
            <Link href='https://github.com/aivdd'>
              <Flex align='center' gap='2' style={{ color: 'var(--gray-12)' }}>
                <svg
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z'
                    fill='currentColor'
                    fill-rule='evenodd'
                    clip-rule='evenodd'></path>
                </svg>
                <Text size='3' weight='bold'>
                  aivdd
                </Text>
              </Flex>
            </Link>
          </Tooltip>

          <Flex className='hidden md:flex'>
            <TabNav.Link href='#tentang-saya'>Tentang saya</TabNav.Link>
            <TabNav.Link href='#pengalaman'>Pengalaman</TabNav.Link>
            <TabNav.Link href='#project'>Projects</TabNav.Link>
            <TabNav.Link href='#hubungi-saya'>Hubungi Saya</TabNav.Link>
          </Flex>
          <Box
            className='md:hidden'
            aria-controls='navbar-default'
            aria-expanded={isMenuOpen}>
            <Button variant='ghost' onClick={toggleMenu}>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14 12.85L1 12.85L1 14.15L14 14.15L14 12.85ZM14 8.85002L1 8.85002L1 10.15L14 10.15L14 8.85002ZM1 4.85003L14 4.85003L14 6.15003L1 6.15002L1 4.85003ZM14 0.850025L1 0.850025L1 2.15002L14 2.15002L14 0.850025Z'
                  fill='currentColor'
                  fill-rule='evenodd'
                  clip-rule='evenodd'></path>
              </svg>
            </Button>
          </Box>
        </Flex>
        <Flex
          display={isMenuOpen ? 'block' : 'none'}
          justify={'center'}
          direction='column'
          id='navbar-default'
          pt='3'
          className='md:hidden'>
          <NavButton />
        </Flex>
      </Container>
    </TabNav.Root>
  );
};

export default NavBar;
