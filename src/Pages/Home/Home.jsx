import React from 'react'
import { useState } from 'react'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/Exploremenu/Exploremenu'
import Swiper from '../../Components/Swiper/Swiper'
import Showfood from '../../Components/Showfood/Showfood'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
  const [category, setCategory] = useState("ALL")
  return (
    <div>
      <Swiper/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Showfood category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home