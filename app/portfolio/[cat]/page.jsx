import Button from '@/components/button/Button';
import Image from 'next/image';

export default function PortfolioSingle({ params }) {
  return (
    <div className={'containe'}>
      <h1 className={'text-btn-primary text-2xl font-bold'}>{params.cat}</h1>

      <div className={'item_data flex gap-12 mt-12 mb-24'}>
        <div className={'flex-one flex flex-col gap-5 justify-center'}>
          <h1 className={'text-5xl'}>im a tag</h1>
          <p className={'text-xl'}>im a tag</p>
          <Button title="See More" url="#" />
        </div>
        <div className={'flex-one h-[500px] relative'}>
          <Image
            className={'object-cover'}
            fill={true}
            src="https://raw.githubusercontent.com/safak/nextjs-tutorial/main/public/illustration.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
