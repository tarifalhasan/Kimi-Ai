import { Fragment, useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

export default function Faq() {
  const [open, setOpen] = useState(1);

  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <div className="container overflow-x-hidden pb-16 px-5 xl:px-[300px]">
        <div>
          <h2 className="text-skin-dark text-[2em] leading-[40px] text-center">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="py-10">
          <div className="faq">
            <Accordion open={open === 1}>
              <AccordionHeader
                className=" text-lg font-Outfit font-semibold text-skin-dark capitalize "
                onClick={() => handleOpen(1)}
              >
                Why choose $KIMI?
              </AccordionHeader>
              <AccordionBody className="text-base font-normal font-Outfit text-[#836E8C]">
                Kind Miners are a new footprint in the history of crypto! Due to
                decentralization, we have simplified mining and done everything
                for the user, now there is no need for permission from local
                authorities, or a special room for placing expensive mining
                hardware, which should be under round-the-clock control or
                paying taxes. $KIMI - the easiest way to invest in mining!
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader
                className="font-Outfit font-semibold text-skin-dark text-lg"
                onClick={() => handleOpen(2)}
              >
                What hardware and mining pool is used?
              </AccordionHeader>
              <AccordionBody className="text-base font-normal font-Outfit text-[#836E8C]">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader
                className="font-Outfit font-semibold text-skin-dark text-lg"
                onClick={() => handleOpen(3)}
              >
                What hardware and mining pool is used?
              </AccordionHeader>
              <AccordionBody className="text-base font-normal font-Outfit text-[#836E8C]">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}>
              <AccordionHeader
                className="font-Outfit font-semibold text-skin-dark text-lg"
                onClick={() => handleOpen(4)}
              >
                What will happen to unsold tokens during the presale?
              </AccordionHeader>
              <AccordionBody className="text-base font-normal font-Outfit text-[#836E8C]">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5}>
              <AccordionHeader
                className="font-Outfit font-semibold text-skin-dark text-lg"
                onClick={() => handleOpen(5)}
              >
                How many presale stages are there and what is the possible
                bonus?{' '}
              </AccordionHeader>
              <AccordionBody className="text-base font-normal font-Outfit text-[#836E8C]">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
          <div className="ask-question py-5 bg-[#2476FF] mt-10 rounded-[15px]">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-2xl text-white font-semibold">
                Do you have any questions?
              </h2>
              <div>
                <button className="inline-flex text-white bg-[#0F172A] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-90 rounded-lg text-lg">
                  See Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
