export default function SingleBlog({ params }) {
  return (
    <div className={'containe'}>
      <div className={'flex'}>
        <div className={'flex-one flex flex-col justify-between'}>
          <h1 className={'text-4xl'}>lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
          <p className={'text-xl font-light'}>i am slug</p>
          <div className={'flex items-center gap-2'}>
            {/* <Image src="" alt="" width={40} height={40} className={'object-cover rounded-full'} /> */}
            <span className={'username'}>i am slug</span>
          </div>
        </div>
        <div className={'flex-one h-[300px] relative'}>
          {/* <Image src="" alt="" fill={true} className={'object-cover'} /> */}
        </div>
      </div>
      <div className={'mt-12 text-xl font-light text-justify text-gray-400'}>
        <p className={'text'}>i am slug</p>
      </div>
    </div>
  );
}
