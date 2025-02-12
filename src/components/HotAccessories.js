import React from 'react'
import HotItemCard from '../components/HotItemCard.js'
import '../styles/HotAccessories.css'
const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifestyle,lifestyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='HotAccessories'>
      <div>
        <img src={musicCover || smartDeviceCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt="Cover" />
      </div>

      <div>
        {music && music.map((item)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        ))}
         {smartDevice && smartDevice.map((item)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        ))}
         {home && home.map((item)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        ))}
         {lifestyle && lifestyle.map((item)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        ))}
        {mobileAccessories && mobileAccessories.map((item)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        ))}

        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>
      </div>
    </div>
  )
}

export default HotAccessories
