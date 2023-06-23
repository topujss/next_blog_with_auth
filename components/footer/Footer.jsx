import Image from 'next/image';

const author = `toquir ahmed`;

const imgArray = [
  {
    id: 1,
    link: '/1.png',
    alt: 'ahmed facebook',
  },
  {
    id: 2,
    link: '/2.png',
    alt: 'ahmed instagram',
  },
  {
    id: 3,
    link: '/3.png',
    alt: 'ahmed twitter',
  },
  {
    id: 4,
    link: '/4.png',
    alt: 'ahmed youtube',
  },
];

export default function Footer() {
  return (
    <>
      <footer className={`h-12 text-xs flex items-center justify-between`}>
        <p className="footer_left">
          &copy; {new Date().getFullYear()} {author} - All rights reserved
        </p>
        <div className="flex items-center gap-2">
          {imgArray.map((img) => {
            return (
              <Image
                key={img.id}
                src={`https://raw.githubusercontent.com/safak/nextjs-tutorial/main/public/${img.link}`}
                width={15}
                height={15}
                alt={img.alt}
                className={`opacity-5 cursor-pointer`}
              />
            );
          })}
        </div>
      </footer>
    </>
  );
}
