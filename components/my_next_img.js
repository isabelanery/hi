import Image from 'next/image';

// <img src="/images/kimetsu.jpg" alt="Kimetsu No Yaiba" />

const MyNextImg = () => (
    <Image
      src="/images/kimetsu.jpg" // Route of the image file
      height={300} // Desired size with correct aspect ratio
      width={300} // Desired size with correct aspect ratio
      alt="Kimetsu"
    />
  );

export default MyNextImg;