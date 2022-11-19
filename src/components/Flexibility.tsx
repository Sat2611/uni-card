import React from "react";
import { Section } from "./layout";

type Props = {};

function Flexibility({}: Props) {
  return (
    <div className='bg-black'>
      <Section>
        <div className='px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 mx-auto justify-center items-center lg:gap-x-20'>
          <div>
            <video
              muted={true}
              // playsinline=''
              // disablepictureinpicture=''
              className='w-full h-full'
            >
              <source
                src='https://www.uni.cards/videos/one-third.mp4'
                type='video/mp4'
              />
              <source
                src='https://www.uni.cards/videos/one-third.webm'
                type='video/webm'
              />
            </video>
          </div>
          <div className='mx-auto'>
            <span className='text-lg gradient md:text-4xl md:leading-8'>
              <span className='gradient'> Uni Pay 1/3rd Card </span>
            </span>
            <p className='text-[28px] leading-[1.2] font-medium sm:text-3xl break-words text-white md:text-5xl'>
              With Great Flexibility,<br></br>Comes Great Power.
            </p>
            <p className='text-gray-300 text-[14px] md:text-2xl md:leading-7 my-4 md:my-8'>
              Split your spends into
              <span className='text-white'> 3 parts over 3 months</span>
              at<br></br> no extra charges. And,{" "}
              <span className='text-white'>get 1% rewards</span> if you pay in 1
              month.
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
        </div>
      </Section>
    </div>
  );
}

export default Flexibility;
