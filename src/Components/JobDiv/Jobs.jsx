import React from 'react'

import { BiTimeFive } from 'react-icons/bi'
import logoMicrosoft from '../../assets/microsoft.png'
import logoAdobe from '../../assets/adobe.png'
import logoIntel from '../../assets/intel.png'
import logoApple from '../../assets/apple.png'
import logoGoogle from '../../assets/google.png'
import logoSamsung from '../../assets/samsung.png'
import logoStarbucks from '../../assets/starbucks.png'
import logoAmazon from '../../assets/amazon.png'

const Data = [
  {
    id: 1,
    image: logoMicrosoft,
    title: 'Web Developer',
    time: 'Now',
    location: "São Paulo, BR",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate commodi reprehenderit dolor numquam itaque error illum fugiat dolore reiciendis similique in dicta, ipsam ea ullam eveniet deserunt ducimus assumenda.',
    company: 'Microsoft Co.'
  },
  {
    id: 2,
    image: logoAdobe,
    title: 'UI Designer',
    time: '4h',
    location: "Toronto, CA",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate commodi reprehenderit dolor numquam itaque error illum fugiat dolore reiciendis similique in dicta, ipsam ea ullam eveniet deserunt ducimus assumenda.',
    company: 'Adobe Inc.'
  },
  {
    id: 3,
    image: logoIntel,
    title: 'Computer Engineering',
    time: '26h',
    location: "Dresden, DE",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate commodi reprehenderit dolor numquam itaque error illum fugiat dolore reiciendis similique in dicta, ipsam ea ullam eveniet deserunt ducimus assumenda.',
    company: 'Intel Co.'
  },
  {
    id: 4,
    image: logoApple,
    title: 'Data Scientist',
    time: 'Now',
    location: "California, USA",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate commodi reprehenderit dolor numquam itaque error illum fugiat dolore reiciendis similique in dicta, ipsam ea ullam eveniet deserunt ducimus assumenda.',
    company: 'Apple Inc.'
  },
  {
    id: 5,
    image: logoGoogle,
    title: 'Big Data Engineer',
    time: 'Now',
    location: "London, UK",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate commodi reprehenderit dolor numquam itaque error illum fugiat dolore reiciendis similique in dicta, ipsam ea ullam eveniet deserunt ducimus assumenda.',
    company: 'Google LLC'
  },
  {
    id: 6,
    image: logoSamsung,
    title: 'Cloud Engineering',
    time: '10h',
    location: "Tokio, JPN",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate commodi reprehenderit dolor numquam itaque error illum fugiat dolore reiciendis similique in dicta, ipsam ea ullam eveniet deserunt ducimus assumenda.',
    company: 'Samsung Co.'
  },
  {
    id: 7,
    image: logoStarbucks,
    title: 'Full-Stack Python Developer',
    time: '2h',
    location: "Seattle, USA",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate commodi reprehenderit dolor numquam itaque error illum fugiat dolore reiciendis similique in dicta, ipsam ea ullam eveniet deserunt ducimus assumenda.',
    company: 'Starbucks'
  },
  {
    id: 8,
    image: logoAmazon,
    title: 'Software Engineering Team Lead',
    time: 'Now',
    location: "Ontario, CA",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate commodi reprehenderit dolor numquam itaque error illum fugiat dolore reiciendis similique in dicta, ipsam ea ullam eveniet deserunt ducimus assumenda.',
    company: 'Amazon.com, Inc.'
  }
]

function Jobs() {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Data.map(({ id, image, title, time, location, desc, company }) => {
            return (
              <div key={id} className="group group/item singleJob lg:w-1/5 md:w-1/4 sm:w-full p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text=[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive />{time}
                  </span>
                </span>

                <h6 className="text-[#ccc]">{location}</h6>

                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[0px] group-hover:text-white">{desc}</p>

                <div className="company flex items-center gap-2">
                  <img src={image} alt="Company Logo" className='w-[10%]' />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-textColor'>Apply Now</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Jobs