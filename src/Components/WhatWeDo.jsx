import React,{useState,useEffect,} from 'react'
import "../WhatWeDo.css"
import portfolio from "../assets/portfolio.jpg";
import bridal from "../assets/BrideWhatwedo.jpg";
import prewedding from "../assets/prewedding.jpg";
import Occassion from "../assets/OtherOcassion.jpg";

const contentArray = [
    {
        image: bridal,
        paragraph: "We take our forte seriously. We instil the philosophy of Kulsum Parvez religiously as we groom every bride to look her best for the coy traditional bride and for the bold millennial bride alike.",
        name: "Bridal Makeup",
    }, {
      image: portfolio,
      paragraph: "We drive creativity to heights! With crazy and artistic approaches, we specialise in capturing the essence of fashion by styling models with designer makeup for their headshots and portfolios",
      name: "Portfolio Photoshoot makeup",
  },

  {
    image: prewedding,
    paragraph: " A breezy moment to cherish with all those close and loved, we specialise in making the bride and the bridesmaids look radiant and full of joy with makeup that makes them look buoyant.",
    name: "Pre-Wedding",
}, {
    image: Occassion,
    paragraph: "Who said it has to be special occasion to makeup. Let’s we all make it special and feel special everyday, no need to wait for special occasions",
    name: "You're Special",
}
]

const WhatWeDo = () => 
{
   const title= {color: "rgb(252 151 172)",
  };
  const [id, setId] = useState(0)

  const nextId = () => {
      setId((id) => {
          if (id < (contentArray.length - 1)) {
              id += 1;
          } else {
              id = 0;
          }
          return id;
      })
  }

  const prevId = () => {
      setId((id) => {
          if (id !== 0) {
              id -= 1;
          } else {
              id = (contentArray.length - 1);
          }
          return id;
      })
  }

  useEffect(() => {
      nextId(id)
  })

  useEffect(() => {
      prevId(id)
  })

  return (
<><center id={`whatwedo`} className='pb-5 pt-5'>
        <h2 style={title}>What we do</h2> 

    <section className="container pt-5">
    <article className="WhatWeDo-section">
    <div className="container-text"> <p>{contentArray[id].name} </p>
                </div>
                <p>{
                    contentArray[id].paragraph
                }
                </p>
            </article>

            <aside className="WhatWeDo-image">
                <img src={contentArray[id].image} alt="img" />
                <div className="slider-arrows">
                    <button className="button button-prev" onClick={prevId} aria-label="prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                            <path fill="none" stroke="#8585AC" strokeWidth="3" d="M11 1L3 9l8 8"/>
                        </svg>
                    </button>
                    <button className="button button-next" onClick={nextId} aria-label="next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                            <path fill="none" stroke="#8585AC" strokeWidth="3" d="M2 1l8 8-8 8"/>
                        </svg>
                    </button>
                </div>
            </aside>

      </section>
    </center>
    
</>  )


}



export default WhatWeDo