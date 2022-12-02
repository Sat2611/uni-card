import Image from "next/image";
import React from "react";
import Img from "../utils/Img";
import { Section } from "./layout";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="py-12 bg-[url('https://www.uni.cards/images/redesign/black_background.webp')]">
      {/* <div className='py-12 bg-gradient-to-b from-black to-[#FFD9BD]'> */}
      <Section>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div className='space-y-8 order-2'>
            <div className='text-white font-bold text-3xl lg:text-6xl'>
              <p className=''>India&apos;s Credit</p>
              <p className=''>Revolution is here. </p>
              <p className=''>
                <span className='gradient'>Pay 1/3rd.</span> Anywhere
              </p>
            </div>
            <div className='hidden lg:block'>
              <div>
                <form>
                  <div className='flex bg-[#454B51] p-1 pl-2 rounded-xl max-w-sm justify-between'>
                    <div className='flex items-center'>
                      <input
                        className='bg-[#454B51] border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44'
                        placeholder='Enter Phone Number'
                        value=''
                      />
                      <span className='w-6 flex items-center justify-end h-full'></span>
                    </div>
                    <button
                      type='submit'
                      className='text-center text-sm leading-7 justify-between pt-2 ml-2 bg-[#FDEF78] rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed'
                    >
                      <span>Apply Now</span>
                    </button>
                  </div>
                  <div className='consent flex space-x-4 items-center py-4 px-2 max-w-xs'>
                    <input type='checkbox' id='consent-msg' />
                    <label
                      htmlFor='consent-msg'
                      className='consent text-gray-300 text-[10px] leading-3 cursor-pointer'
                    >
                      By submitting this information, you agree to be contacted
                      by Uni Cards over Call, SMS, Email or WhatsApp to guide
                      you through your application.
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='w-1/2 order-1 lg:order-2 bounce'>
            <Img
              src='https://www.uni.cards/images/redesign/card_asset.webp'
              alt='card'
              width={920}
              height={890}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Hero;
