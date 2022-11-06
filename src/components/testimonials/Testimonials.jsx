import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "X",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sed cumque, tempore autem ex dicta voluptas laborum aut temporibus repellat laudantium, aperiam in amet dolor? Porro laboriosam voluptate suscipit veritatis."
  },
  {
    avatar: AVTR2,
    name: "X",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sed cumque, tempore autem ex dicta voluptas laborum aut temporibus repellat laudantium, aperiam in amet dolor? Porro laboriosam voluptate suscipit veritatis."
  },
  {
    avatar: AVTR3,
    name: "X",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sed cumque, tempore autem ex dicta voluptas laborum aut temporibus repellat laudantium, aperiam in amet dolor? Porro laboriosam voluptate suscipit veritatis."
  },
  {
    avatar: AVTR4,
    name: "X",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sed cumque, tempore autem ex dicta voluptas laborum aut temporibus repellat laudantium, aperiam in amet dolor? Porro laboriosam voluptate suscipit veritatis."
  }
]

const Testimonials = () => {
  return (
    <section>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
          <div className="client_avatar">
            <img src={avatar} alt={name} />
          </div>
          <h5 className='client_name'>{name}</h5>
          <small className='client_review'>
            {review}
          </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials