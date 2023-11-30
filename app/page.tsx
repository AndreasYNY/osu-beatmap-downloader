import BackgroundImage from '@/components/background-image';
import DownloadCard from '@/components/download-card';
import PreviewPlayer from '@/components/preview-player';

export default function Home() {
  return (
    <BackgroundImage>
      <div className={`w-full min-h-screen flex justify-center items-center relative backdrop-blur-sm`}>
        <div style={{ width: '420px' }} className='min-h-screen flex flex-col justify-center items-center opacity-90'>
          <DownloadCard />
        </div>
        <PreviewPlayer />
      </div>
    </BackgroundImage>
  );
}
