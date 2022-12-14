import React from "react";
import { Section } from "./layout";

type Props = {};

function Smart({}: Props) {
  return (
    <div className='bg-black py-8'>
      <Section>
        <div className='grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-2 mx-auto justify-center items-center lg:gap-x-20'>
          <div className=' order-2 lg:order-1'>
            <span className='text-lg gradient2 md:text-4xl md:leading-8'>
              <span className='gradient2'> Uni Pay 1/2 Card </span>
            </span>
            <p className='text-[28px] leading-[1.2] font-medium sm:text-3xl break-words text-white md:text-5xl'>
              Smart Payments,<br></br>Delightful Rewards.
            </p>
            <p className='text-gray-400 text-[14px] md:text-2xl md:leading-7 my-4 md:my-8'>
              <span className='text-white'>Split your spends in 2.</span> Or,{" "}
              <br></br>
              pay in 1 month &amp; get{" "}
              <span className='text-white'>1.2% rewards!</span>
            </p>
            <div className='mt-8 md:mt-16'>
              <a
                href='https://www.uni.cards/pay-one-third'
                className='apply_btn py-3 px-8 md:px-11 text-white text-sm md:text-xl rounded-[20px] md:rounded-[25px] leading-7 md:leading-[50px] bg-black border border-green'
              >
                Know More
              </a>
            </div>
          </div>
          <div className='order-1'>
            <video
              muted={true}
              autoPlay
              // loop
              playsInline={true}
              disablePictureInPicture={false}
              className='w-full h-full'
            >
              <source
                src='https://www.uni.cards/videos/pay_half.mp4'
                type='video/mp4'
              />
              <source
                src='https://www.uni.cards/videos/pay_half.webm'
                type='video/webm'
              />
            </video>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Smart;
