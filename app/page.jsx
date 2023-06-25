import Link from 'next/link';
import Styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';

const Hero = `https://raw.githubusercontent.com/safak/nextjs-tutorial/main/public/hero.png`;

export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className={`${Styles.item}`}>
        <h1 className={`text-7xl font-medium ${Styles.title}`}>Better design for your digital products.</h1>
        <p className={`font-light text-xl`}>
          Turning your Idea into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button url="/portfolio" title="See our works" />
      </div>
      <div className={Styles.item}>
        <Image src={Hero} alt="" width="1000" height="500" className="object-contain w-full" />
      </div>
    </div>
  );
}
