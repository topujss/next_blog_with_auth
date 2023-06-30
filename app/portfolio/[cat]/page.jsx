import Button from '@/components/button/Button';
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (cat) => {
  const data = items[cat];

  if (data) return data;

  return notFound();
};

export default function PortfolioSingle({ params }) {
  const data = getData(params.cat);

  return (
    <div className={'containe'}>
      <h1 className={'text-btn-primary text-2xl font-bold'}>{params.cat}</h1>

      {data.map(({ id, title, desc, image }) => {
        return (
          <div className={'item_data flex gap-12 mt-12 mb-24'} key={id}>
            <div className={'flex-one flex flex-col gap-5 justify-center'}>
              <h1 className={'text-5xl'}>{title}</h1>
              <p className={'text-xl'}>{desc}</p>
              <Button title="See More" url="#" />
            </div>
            <div className={'flex-one h-[500px] relative'}>
              <Image className={'object-cover'} fill={true} src={image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
