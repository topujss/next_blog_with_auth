import Image from 'next/image';
import Link from 'next/link';

const portfolioArray = [
  {
    id: 1,
    link: '/portfolio/illustrations',
    title: 'Illustrations',
    imgLink: `https://raw.githubusercontent.com/safak/nextjs-tutorial/main/public/illustration.png`,
  },
  {
    id: 2,
    link: '/portfolio/websites',
    title: 'Websites',
    imgLink: `https://raw.githubusercontent.com/safak/nextjs-tutorial/main/public/websites.jpg`,
  },
  {
    id: 3,
    link: '/portfolio/apps',
    title: 'Apps',
    imgLink: `https://raw.githubusercontent.com/safak/nextjs-tutorial/main/public/apps.jpg`,
  },
];

export default function Portfolio() {
  return (
    <div className={'portfolio'}>
      <h1 className={'my-5'}>Choose a gallery</h1>
      <div className={'flex gap-12 portfolio_item'}>
        {portfolioArray.map((single, i) => {
          return (
            <Link key={i} href={single.link} className={'item'}>
              <Image src={single.imgLink} className={'image'} fill={true} />
              <span className={'title'}>{single.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
