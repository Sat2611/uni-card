import React from "react";

type Props = {};

function Split({}: Props) {
  return (
    <div>
      <section>
        <div className='w-full max-w-7xl mx-auto px-6 py-40 md:px-4'>
          <div className='flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium'>
            <p style={{ opacity: 1, transform: "none" }}>
              Split your payments, anywhere and everywhere.
            </p>
            <p style={{ opacity: 1, transform: "none" }}>
              <span className='text-[#63d9c8]'>
                Earn the best rewards.&nbsp;
              </span>
              Enjoy round the clock&nbsp;
              <span className='text-[#63d9c8]'>WhatsApp support.&nbsp;</span>It
            </p>
            <p style={{ opacity: 1, transform: "none" }}>
              takes just 5 minutes to get your card, and it’s&nbsp;
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
                }}
                className='gradient'
              >
                lifetime free:&nbsp;
              </span>{" "}
            </p>
            <p style={{ opacity: 1, transform: "none" }}>
              joining fee, no annual charges.
            </p>
          </div>
          <div
            className='flex md:justify-center py-12'
            style={{ opacity: 1, transform: "none" }}
          >
            <div
              style={{
                background:
                  "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
              }}
              className='flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center'
            >
              <img
                alt='down_arrow'
                src='https://www.uni.cards/images/down_arrow.svg'
                loading='lazy'
                className='w-9 md:w-14 css-0'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Split;
