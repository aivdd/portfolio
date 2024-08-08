import {
  Box,
  Flex,
  Section,
  Text,
  Container,
  Grid,
  Heading,
  Strong,
  Button,
  Link,
  Tooltip,
} from '@radix-ui/themes';
import ImageProfile from './ImageProfile';
import SocialMedia from './SocialMedia';

const TentangSaya = () => {
  return (
    <Section id='tentang-saya' size={{ initial: '1', md: '4' }}>
      <Container px={{ initial: '3' }}>
        <Grid
          columns={{ initial: '1', md: '3' }}
          gap='3'
          justify='center'
          align='center'>
          <Box
            gridColumnStart={{ initial: '1', md: '1' }}
            gridColumnEnd={{ initial: '1', md: '3' }}>
            <Flex direction='column'>
              <Text size='6' weight='bold'>
                Hey!
              </Text>
              <Heading
                size={{ initial: '7', md: '9' }}
                style={{ color: 'var(--accent-9)' }}>
                David Yusuf Rahmanto
              </Heading>
            </Flex>
            <Flex pt='3' direction='column'>
              <Text size='4' weight='medium'>
                Saya adalah seorang <Strong>Web Developer</Strong>
              </Text>
              <Text>
                Mahasiswa tingkat akhir yang berkompetensi membuat website
                menggunakan framework{' '}
                <Tooltip content='Kunjungi halaman Laravel'>
                  <Link href='https://laravel.com/' target='_blank'>
                    Laravel
                  </Link>
                </Tooltip>
                . Pengalaman saya di lingkungan coorporate menumbuhkan soft
                skill kerja sama antar departemen dalam divisi. Kemampuan saya
                dalam bidang IT baik Software maupun Hardware dapat dilihat pada{' '}
                <Link href='#project'>Demo Project</Link> dan{' '}
                <Link href='#pengalaman'>Pengalaman saya</Link>.
              </Text>
            </Flex>
            <Flex gap='3' pt='3'>
              <SocialMedia />
            </Flex>
            <Flex as='span' pt='3' direction='column' display='inline-flex'>
              <Link href='#pengalaman'>
                <Button variant='surface'>
                  Selengkapnya{' '}
                  <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                      fill='currentColor'
                      fill-rule='evenodd'
                      clip-rule='evenodd'></path>
                  </svg>
                </Button>
              </Link>
            </Flex>
          </Box>
          <Box p={{ initial: '5' }} gridColumn={{ initial: '1', md: '3' }}>
            <Flex justify='center' display={'flex'}>
              <ImageProfile />
            </Flex>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
export default TentangSaya;
