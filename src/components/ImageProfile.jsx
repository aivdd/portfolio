import { Avatar, Box } from '@radix-ui/themes';

const ImageProfile = () => {
  return (
    <Avatar
      src='/Profile-Photo-DSC08551.JPG'
      style={{
        width: '320px',
        height: '320px',
        boxShadow:
          '0 0 15px 15px var(--accent-10), 0 0 30px 30px var(--accent-6)',
      }}
      fallback='D'
    />
  );
};

export default ImageProfile;
