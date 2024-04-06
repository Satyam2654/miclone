import React,{useEffect,useState} from 'react'
import NavCard from './NavCard.js'
import '../styles/NavOption.css'

const NavOption = ({miPhones,redmiPhones,tv,laptop, fitnessAndLifeStyle,home,audio,accessories}) => {

    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
    const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
    const [tvToggle,setTvToggle] = useState(false);
    const [laptopToggle,setLaptopToggle] = useState(false);
    const [fitnessToggle,setFitnessToggle] = useState(false);
    const [homeToggle,setHomeToggle] = useState(false);
    const [audioToggle,setAudioToggle] = useState(false);
    const [accessoriesToggle,setAccessoriesToggle] = useState(false);

    // useEffect(() => {
     
    //     if(window.location.pathname === "/#miphones"){
    //         console.log("hello")
    //         return setMiPhoneToggle(true)
    //        }
    //      if(window.location.pathname === "/#redmiphones"){
    //         return   setRedmiPhoneToggle(true)
    //        }
    //        if(window.location.pathname === "/#tv"){
    //         return   setTvToggle(true)
    //        }
    //        if(window.location.pathname === "/#laptops"){
    //         return   setLaptopToggle(true)
    //        }
    //        if(window.location.pathname === "/#lifestyle"){
    //         return  setFitnessToggle(true)
    //        }
    //        if(window.location.pathname === "/#home"){
    //         return  setHomeToggle(true)
    //        }
    //        if(window.location.pathname === "/#audio"){
    //         return  setAudioToggle(true)
    //        }
           
    //        if(window.location.pathname === "/#accessories"){
    //         return  setAccessoriesToggle(true)
    //        }
    
           
    //    }, [window.location.pathname])
    useEffect(() => {
        const path = window.location.pathname;
        switch (path) {
            case "/#miphones":
                setMiPhoneToggle(true);
                break;
            case "/#redmiphones":
                setRedmiPhoneToggle(true);
                break;
            case "/#tv":
                setTvToggle(true);
                break;
            case "/#laptops":
                setLaptopToggle(true);
                break;
            case "/#lifestyle":
                setFitnessToggle(true);
                break;
            case "/#home":
                setHomeToggle(true);
                break;
            case "/#audio":
                setAudioToggle(true);
                break;
            case "/#accessories":
                setAccessoriesToggle(true);
                break;
            default:
                break;
        }
    }, [])
console.log('Navoptions')
console.log(window.location.pathname);
  return (
    <div className='navOptions'>

{miPhoneToggle?   miPhones.map((item)=>(

< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }


{redmiPhoneToggle?   redmiPhones.map((item)=>(

< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }


{tvToggle ?   tv.map((item)=>(

< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }

{laptopToggle ?   laptop.map((item)=>(

< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }



{fitnessToggle ?   fitnessAndLifeStyle.map((item)=>(

< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }


{homeToggle ?   home.map((item)=>(

  < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }



{audioToggle ?   audio.map((item)=>(

< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }


{accessoriesToggle ?   accessories.map((item)=>(

< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }

      
    </div>
  )
}

export default NavOption
