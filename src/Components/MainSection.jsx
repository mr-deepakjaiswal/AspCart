import React, { useState } from 'react'
import ItemsDetails from './ItemsDetails';
import ReviewSection from './ReviewSection';
import ButtonsSection from './ButtonsSection';
import Item from './Item';
import Vender from './Vender';
import CommentSection from './CommentSection';
import SupportSection from './SupportSection';

export default function MainSection() {
  const [Active, setActive] = useState("ItemsDetailsSection");
  return (
    <div className='md:flex justify-between gap-8 mt-8 md:ps-44 pe-24'>
      <div className='md:w-[780px] w-96 shadow-lg'>
        {Active === "ItemsDetailsSection" && <ItemsDetails />}
        {Active === "ReviewsSection" && <ReviewSection />}
        {Active === "CommentsSection" && <CommentSection />}
        {Active === "SupportSection" && <SupportSection />}
      </div>
      <div className='w-96 md:w-[460px] mt-4'>
      <div className='md:flex gap-6'>
          <button onClick={()=>{setActive("ItemsDetailsSection")}}>Items Details</button> |
          <button onClick={()=>{setActive("ReviewsSection")}}>Reviews</button> |
          <button onClick={()=>{setActive("CommentsSection")}}>Comments</button> |
          <button onClick={()=>{setActive("SupportSection")}}>Support</button>
      </div>
        <Item />
        <Vender />
        <ButtonsSection />
      </div>
    </div>
  )
}
