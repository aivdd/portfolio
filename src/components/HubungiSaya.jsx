import {
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Section,
  Text,
  TextArea,
} from '@radix-ui/themes';

const HubungiSaya = () => {
  return (
    <Section id='hubungi-saya' style={{ backgroundColor: 'var(--accent-9)' }}>
      <Container px={{ initial: '3' }}>
        <Grid columns={{ initial: '1', md: '3' }}>
          <Flex direction='column'>
            <Text size='6' weight='bold'>
              Terima Kasih
            </Text>
            <Text>Sudah Mengunjungi Portfolio saya</Text>
            <Text>davidyusufrahmanto@gmail.com</Text>
          </Flex>
          <Flex direction='column'>
            <Text size='6' weight='bold'>
              Links
            </Text>
            <Link style={{ color: 'var(--accent-12)' }} href='#tentang-saya'>
              Tentang saya
            </Link>
            <Link style={{ color: 'var(--accent-12)' }} href='#pengalaman'>
              Pengalaman
            </Link>
            <Link style={{ color: 'var(--accent-12)' }} href='#project'>
              Projects
            </Link>
            <Link style={{ color: 'var(--accent-12)' }} href='#hubungi-saya'>
              Hubungi saya
            </Link>
          </Flex>
          <Flex direction='column' gap='2'>
            <Text size='6' weight='bold'>
              Hubungi saya
            </Text>
            <input
              type='text'
              placeholder='Subject'
              style={{
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid ',
                color: 'var(--accent-12)',
                backgroundColor: 'var(--accent-6)',
              }}
            />
            <TextArea
              style={{ height: '200px' }}
              placeholder='Masukan pesan anda...'
            />
            <Flex display='inline-flex'>
              <Button
                style={{
                  width: '100%',
                  color: 'var(--accent-12)',
                  backgroundColor: 'var(--accent-1)',
                }}>
                Submit
              </Button>
            </Flex>
          </Flex>
        </Grid>
      </Container>
    </Section>
  );
};

export default HubungiSaya;
