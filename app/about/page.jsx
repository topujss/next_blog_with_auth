import Button from '@/components/button/Button';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className="container">
        <div className="w-full h-[300px] relative">
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg"
            fill={true}
            alt=""
            className="object-cover grayscale"
          />
          <div className="absolute bottom-5 left-5 bg-btn-primary text-white p-2">
            <h1 className="text-2xl font-bold">Digital Storytellers</h1>
            <h2 className="text-xl font-semibold">Handcrafting award winning digital experiences</h2>
          </div>
        </div>
        <div className="flex gap-24">
          <div className="flex-1 mt-12 flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Who Are We?</h1>
            <p className="font-light text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus
              magnam iure esse tempora beatae. A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio
              voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis
              <hr className="my-2 block border-white" />
              voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae
              dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
              officiis voluptatum quo ea eveniet?
            </p>
          </div>
          <div className="flex-1 mt-12 flex flex-col gap-5">
            <h1 className="text-2xl font-bold">What We Do?</h1>
            <p className="font-light text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus
              magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <ul className="list-disc list-inside mt-4">
                <li>Creative Illustrations</li>
                <li>Dynamic Websites</li>
                <li>Fast and Handy</li>
                <li>Mobile Apps</li>
              </ul>
            </p>
            <Button url="/contact" title="Contact" />
          </div>
        </div>
      </div>
    </>
  );
}
