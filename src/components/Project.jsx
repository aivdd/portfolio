import {
  Badge,
  Box,
  Button,
  Card,
  Code,
  Container,
  DataList,
  Flex,
  Grid,
  Heading,
  IconButton,
  Inset,
  Link,
  ScrollArea,
  Section,
  Tabs,
  Text,
} from '@radix-ui/themes';
import ProjectData from './ProjectData';

const Project = () => {
  const projects = ProjectData();

  return (
    <Section id='project'>
      <Container px={{ initial: '3' }}>
        <Flex justify='start' display='flex' mb='4'>
          <Heading size={{ initial: '8', md: '9' }}>Projects</Heading>
        </Flex>

        <Grid columns={{ initial: '1', md: '3' }} gap='6' pt='5'>
          {projects.map((project, index) => (
            <Card>
              <Inset clip='padding-box' side='top' pb='current'>
                <img
                  src={project.image}
                  alt='Image Preview Project'
                  style={{
                    display: 'block',
                    objectFit: 'cover',
                    width: '100%',
                    height: 200,
                    backgroundColor: 'var(--gray-5)',
                  }}
                />
              </Inset>
              <Flex key={index} direction='column' py='1'>
                <Flex gap='5' align='center' mt='-7' mb='3'>
                  <Link href={project.url_demo} target='_blank'>
                    <Button variant='classic' size='4'>
                      Live Demo{' '}
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738'
                          fill='currentColor'></path>
                      </svg>
                    </Button>
                  </Link>
                  <Link href={project.url_github} target='_blank'>
                    <IconButton variant='surface' size='4'>
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
                    </IconButton>
                  </Link>
                </Flex>

                <Heading size={{ initial: '4', md: '6' }}>
                  {project.judul}
                </Heading>
                <Text style={{ fontStyle: 'italic' }}>{project.date}</Text>

                <Tabs.Root defaultValue='tentang'>
                  <Tabs.List>
                    <Tabs.Trigger value='tentang'>Tentang</Tabs.Trigger>
                    <Tabs.Trigger value='akses'>Akses</Tabs.Trigger>
                  </Tabs.List>

                  <Box pt='3'>
                    <Tabs.Content value='tentang'>
                      <ScrollArea
                        type='always'
                        scrollbars='vertical'
                        style={{ height: 180 }}>
                        <Flex direction='column' gap='2'>
                          <Text size='2'>{project.desc}</Text>
                          <Text mt='2' size='2'>
                            <strong>Tools:</strong> {project.tools.join(', ')}
                          </Text>
                          <Text mt='2' size='2'>
                            <strong>Libraries:</strong>{' '}
                            {project.library.join(', ')}
                          </Text>
                        </Flex>
                      </ScrollArea>
                    </Tabs.Content>

                    <Tabs.Content value='akses'>
                      <ScrollArea
                        type='always'
                        scrollbars='vertical'
                        style={{ height: 180 }}>
                        <DataList.Root>
                          {project.roles.map((role, roleIndex) => (
                            <DataList.Item key={roleIndex} align='center'>
                              <DataList.Label minWidth='88px'>
                                Role
                              </DataList.Label>
                              <DataList.Value>
                                <Badge
                                  color='voilet'
                                  variant='soft'
                                  radius='full'>
                                  {role.name}
                                </Badge>
                              </DataList.Value>
                              <DataList.Label minWidth='88px'>
                                Username
                              </DataList.Label>
                              <DataList.Value>{role.username}</DataList.Value>
                              <DataList.Label minWidth='88px'>
                                Password
                              </DataList.Label>
                              <DataList.Value>{role.password}</DataList.Value>
                            </DataList.Item>
                          ))}
                        </DataList.Root>
                      </ScrollArea>
                    </Tabs.Content>
                  </Box>
                </Tabs.Root>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Project;
