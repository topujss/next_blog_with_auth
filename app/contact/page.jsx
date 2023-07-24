import Button from '@/components/button/Button';
import Image from 'next/image';
import './contact.scss';

export const metadata = {
  title: 'Next blog app - contact',
  description: 'You can contact us directly',
};

export default function Contact() {
  return (
    <div className={'container'}>
      <h1 className={'text-6xl mb-24 text-center text-green-500 font-semibold'}>Let&apos;s Keep in Touch</h1>
      <div className={'flex items-center gap-24 '}>
        <div className={'img_tag flex-one h-[600px] relative'}>
          <Image
            src="https://raw.githubusercontent.com/safak/nextjs-tutorial/main/public/contact.png"
            alt=""
            fill={true}
            className={'object-contain'}
          />
        </div>
        <form className={'flex-one flex flex-col gap-5 form_style'}>
          <input type="text" placeholder="name" className={'input'} />
          <input type="text" placeholder="email" className={'input'} />
          <textarea className={'textArea'} placeholder="message" cols="30" rows="10"></textarea>
          <Button url="#" title="Send" />
        </form>
      </div>
    </div>
  );
}
