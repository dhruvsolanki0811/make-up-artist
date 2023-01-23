import React, { useEffect } from 'react'
import "../CategoryGallery.css"
import bridalL1 from "../Gallery/Bridal/landscape/alok-verma-jQ3UdoWiFis-unsplash.jpg"
import bridalL2 from "../Gallery/Bridal/landscape/rajat-sarki-NvuOJFK53sE-unsplash.jpg"
import bridalS1 from "../Gallery/Bridal/square/alok-verma-ohENjR9w0bk-unsplash.jpg"
import bridalS2 from "../Gallery/Bridal/square/amish-thakkar-lAY2TAhN06k-unsplash.jpg"
import bridalS3 from "../Gallery/Bridal/square/ardy-arjun-SsGD7Vjl4AY-unsplash.jpg"
import bridalS4 from "../Gallery/Bridal/square/bulbul-ahmed-ByInrRliROc-unsplash.jpg"
import bridalS5 from "../Gallery/Bridal/square/bulbul-ahmed-jUEqikbT4o8-unsplash.jpg"
import bridalS6 from "../Gallery/Bridal/square/dollar-gill-T-PUQaJ8YEw-unsplash.jpg"
import bridalS7 from "../Gallery/Bridal/square/sabesh-photography-rjgFxE3eARQ-unsplash.jpg"
import bridalS8 from "../Gallery/Bridal/square/skg-photography-zW7hVlt6Oa0-unsplash.jpg"
import bridalP1 from "../Gallery/Bridal/potrait/dollar-gill-lfgqyh6R6bE-unsplash.jpg"
import bridalP2 from "../Gallery/Bridal/potrait/bulbul-ahmed--qlW60EuUqU-unsplash.jpg"
import bridalP3 from "../Gallery/Bridal/potrait/amish-thakkar-LpumrlmEjhw-unsplash.jpg"
import bridalP4 from "../Gallery/Bridal/potrait/dhiren-maru-i7zfFnsIBhI-unsplash.jpg"
import bridalP5 from "../Gallery/Bridal/potrait/dollar-gill-2hprQNyWkvY-unsplash.jpg"
import bridalP6 from "../Gallery/Bridal/potrait/dollar-gill-vZUveRc8Vqk-unsplash.jpg"
import bridalP7 from "../Gallery/Bridal/potrait/mohit-maru-x9KgVjd3AVA-unsplash.jpg"
import bridalP8 from "../Gallery/Bridal/potrait/photo-1610173827043-9db50e0d8ef9.jfif"

import modelL1 from "../Gallery/Model/landscape/shubham-patel-7O1VG7O_SB4-unsplash.jpg"
import modelL2 from "../Gallery/Model/landscape/matheus-ferrero-4QotHf68gSg-unsplash.jpg"
import modelS1 from "../Gallery/Model/square/seth-doyle-B3VWevRn1oU-unsplash.jpg"
import modelS2 from "../Gallery/Model/square/angel-rSODThq-thM-unsplash.jpg"
import modelS3 from "../Gallery/Model/square/danny-g-wA1lKuphLvg-unsplash.jpg"
import modelS4 from "../Gallery/Model/square/marco-chilese-6mRfNloPHlc-unsplash.jpg"
import modelS5 from "../Gallery/Model/square/michael-afonso-3lbxyaAoXbU-unsplash.jpg"
import modelS6 from "../Gallery/Model/square/seth-doyle-BZ2PNGD5Emw-unsplash.jpg"
import modelS7 from "../Gallery/Model/square/seth-doyle-hF2XIzJimtM-unsplash.jpg"
import modelS8 from "../Gallery/Model/square/alex-hddife-dESD2tPePxw-unsplash.jpg"
import modelP1 from "../Gallery/Model/potrait/aiony-haust-3TLl_97HNJo-unsplash.jpg"
import modelP2 from "../Gallery/Model/potrait/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg"
import modelP3 from "../Gallery/Model/potrait/judeus-samson-y2ny77b5sU0-unsplash.jpg"
import modelP4 from "../Gallery/Model/potrait/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg"
import modelP5 from "../Gallery/Model/potrait/max-muselmann-oIVvGqqwVJw-unsplash.jpg"
import modelP6 from "../Gallery/Model/potrait/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
import modelP7 from "../Gallery/Model/potrait/oleg-ivanov-QhR78CbFPoE-unsplash.jpg"
import modelP8 from "../Gallery/Model/potrait/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg"

import celebrityL1 from "../Gallery/Celebrity/landscape/candice-picard-1dwRuFgDr0o-unsplash.jpg"
import celebrityL2 from "../Gallery/Celebrity/landscape/atikh-bana-zPFws4toKhg-unsplash.jpg"
import celebrityS1 from "../Gallery/Celebrity/square/ashley-piszek-mhB8k9DD0OQ-unsplash.jpg"
import celebrityS2 from "../Gallery/Celebrity/square/ashley-piszek-O3B5CgkY7Fo-unsplash.jpg"
import celebrityS3 from "../Gallery/Celebrity/square/joanna-nix-walkup-h2pnXHMz8YM-unsplash.jpg"
import celebrityS4 from "../Gallery/Celebrity/square/luwadlin-bosman-fAFAAWdQS_M-unsplash.jpg"
import celebrityS5 from "../Gallery/Celebrity/square/matt-seymour-LXrfo1yzQjQ-unsplash.jpg"
import celebrityS6 from "../Gallery/Celebrity/square/mohamed-nohassi-GXzHGgzraHc-unsplash.jpg"
import celebrityS7 from "../Gallery/Celebrity/square/zubin-mehta-pyuRUmLz7HY-unsplash.jpg"
import celebrityS8 from "../Gallery/Celebrity/square/memento-media--aQdz6XiczU-unsplash.jpg"
import celebrityP1 from "../Gallery/Celebrity/potrait/apostolos-vamvouras-Sa9Oi6jrNUM-unsplash.jpg"
import celebrityP2 from "../Gallery/Celebrity/potrait/annie-spratt-_tnvfGiLFvQ-unsplash.jpg"
import celebrityP3 from "../Gallery/Celebrity/potrait/freestocks-MWWKA47KemU-unsplash.jpg"
import celebrityP4 from "../Gallery/Celebrity/potrait/hadis-safari-A7rkoSFjrG0-unsplash.jpg"
import celebrityP5 from "../Gallery/Celebrity/potrait/jon-ly-ADBOC3UP4eQ-unsplash.jpg"
import celebrityP6 from "../Gallery/Celebrity/potrait/radu-florin-5QUdx2QujlU-unsplash.jpg"
import celebrityP7 from "../Gallery/Celebrity/potrait/omar-lopez-pkKdbtTwxAs-unsplash.jpg"
import celebrityP8 from "../Gallery/Celebrity/potrait/kareya-saleh-tLKOj6cNwe0-unsplash.jpg"

import pandpL1 from "../Gallery/Press and Praise/landscape/annie-spratt-hWJsOnaWTqs-unsplash.jpg"
import pandpL2 from "../Gallery/Press and Praise/landscape/ashni-ePWaAwUn80k-unsplash.jpg"
import pandpS1 from "../Gallery/Press and Praise/square/ashni-Wh9ZC4727e4-unsplash.jpg"
import pandpS2 from "../Gallery/Press and Praise/square/bob-coyne-2199hbtQQVw-unsplash.jpg"
import pandpS3 from "../Gallery/Press and Praise/square/charlesdeluvio-FdDkfYFHqe4-unsplash.jpg"
import pandpS4 from "../Gallery/Press and Praise/square/giorgio-trovato-q_622B22t7I-unsplash.jpg"
import pandpS5 from "../Gallery/Press and Praise/square/hatice-yardim-alXkKDNFavo-unsplash.jpg"
import pandpS6 from "../Gallery/Press and Praise/square/iphotos-NkHQeV6RQS8-unsplash.jpg"
import pandpS7 from "../Gallery/Press and Praise/square/mattias-diesel-3M2cqBRQmjA-unsplash.jpg"
import pandpS8 from "../Gallery/Press and Praise/square/patrick-perkins-Cusn7DD0qAE-unsplash.jpg"

import moreL1 from "../Gallery/More/landscape/brooke-cagle-pPtLSKseW78-unsplash.jpg"
import moreL2 from "../Gallery/More/landscape/ivana-cajina-_7LbC5J-jw4-unsplash.jpg"
import moreS1 from "../Gallery/More/square/behrouz-sasani-Mkmu-B-fZIo-unsplash.jpg"
import moreS2 from "../Gallery/More/square/gean-montoya-M2Hk2bVtNn4-unsplash.jpg"
import moreS3 from "../Gallery/More/square/julian-wan-WNoLnJo7tS8-unsplash.jpg"
import moreS4 from "../Gallery/More/square/karina-lago-G7Y2mEMcsvI-unsplash.jpg"
import moreS5 from "../Gallery/More/square/seth-doyle-IMYvZjlX3jE-unsplash.jpg"
import moreS6 from "../Gallery/More/square/seth-doyle-R5tHd-aYmPs-unsplash.jpg"
import moreS7 from "../Gallery/More/square/seth-doyle-vmBik4xv27s-unsplash.jpg"
import moreS8 from "../Gallery/More/square/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
import moreP1 from "../Gallery/More/potrait/albert-dera-ILip77SbmOE-unsplash.jpg"
import moreP2 from "../Gallery/More/potrait/drake-s-takes-vKnRYW-mtek-unsplash.jpg"
import moreP3 from "../Gallery/More/potrait/gregory-hayes-h5cd51KXmRQ-unsplash.jpg"
import moreP4 from "../Gallery/More/potrait/jakob-rosen-YxVNYk_oxa0-unsplash.jpg"
import moreP5 from "../Gallery/More/potrait/mohamad-khosravi-5KyzZbonwqQ-unsplash.jpg"
import moreP6 from "../Gallery/More/potrait/oliver-ragfelt-khV4fTy6-D8-unsplash.jpg"
import moreP7 from "../Gallery/More/potrait/taras-chernus--au3XMzfhro-unsplash.jpg"
import moreP8 from "../Gallery/More/landscape/oleksii-berdnikov-EoM0DD8WgBk-unsplash.jpg"
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component'
const Bridal = () => {

  


  
  return (
<>
<div className="gallery-div"> 

    <div className="big"   ><LazyLoadImage src={bridalS1}     alt="picsum"/></div>

  <div    ><LazyLoadImage src={bridalS3 }   alt="picsum"/></div>
    <div    ><LazyLoadImage src={bridalS4 }    alt="picsum"/></div>
    <div  ><LazyLoadImage src={bridalS5 }     alt="picsum"/></div>
    <div className="wide"  ><LazyLoadImage src={bridalL1}   alt="picsum"/></div>

    <div  ><LazyLoadImage src={bridalS6  }     alt="picsum"/></div>
    <div className="tall"  ><LazyLoadImage src={bridalS7}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={bridalS8}     alt="picsum"/></div>
    <div className="tall"  ><LazyLoadImage src={bridalP1}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={bridalP2}     alt="picsum"/></div>
    
    <div  ><LazyLoadImage src={bridalP3}     alt="picsum"/></div>

    <div  ><LazyLoadImage src={bridalP4}     alt="picsum"/></div>
    <div className="big"  ><LazyLoadImage src={bridalS2}     alt="picsum"/></div>

    <div  ><LazyLoadImage src={bridalP5}    alt="picsum"/></div>
    <div  ><LazyLoadImage src={bridalP6}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={bridalP7}     alt="picsum"/></div>
    <div className="wide"  ><LazyLoadImage src={bridalL2}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={bridalP8}     alt="picsum"/></div>

    <div    ><LazyLoadImage src={bridalS3 }   alt="picsum"/></div>

  </div>
</>  )
}



const Model = () => {
  return (
<>
<div className="gallery-div"> 

    <div className="big"   ><LazyLoadImage src={modelS1}     alt="picsum"/></div>

  <div    ><LazyLoadImage src={modelS3 }   alt="picsum"/></div>
    <div    ><LazyLoadImage src={modelS4 }    alt="picsum"/></div>
    <div  ><LazyLoadImage src={modelS5 }     alt="picsum"/></div>
    <div className="wide"  ><LazyLoadImage src={modelL1}   alt="picsum"/></div>

    <div  ><LazyLoadImage src={modelS6  }     alt="picsum"/></div>
    <div className="tall"  ><LazyLoadImage src={modelS7}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={modelS8}     alt="picsum"/></div>
    <div className="tall"  ><LazyLoadImage src={modelP1}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={modelP2}     alt="picsum"/></div>
    
    <div  ><LazyLoadImage src={modelP3}     alt="picsum"/></div>

    <div  ><LazyLoadImage src={modelP4}     alt="picsum"/></div>
    <div className="big"  ><LazyLoadImage src={modelS2}     alt="picsum"/></div>

    <div  ><LazyLoadImage src={modelP5}    alt="picsum"/></div>
    <div  ><LazyLoadImage src={modelP6}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={modelP7}     alt="picsum"/></div>
    <div className="wide"  ><LazyLoadImage src={modelL2}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={modelP8}     alt="picsum"/></div>

    <div    ><LazyLoadImage src={modelS7 }   alt="picsum"/></div>

  </div>
</>  )
}


const Celebrity = () => {
  return (
<>
<div className="gallery-div"> 

    <div className="big"   ><LazyLoadImage src={celebrityS1}     alt="picsum"/></div>

  <div    ><LazyLoadImage src={celebrityS3 }   alt="picsum"/></div>
    <div    ><LazyLoadImage src={celebrityS4 }    alt="picsum"/></div>
    <div  ><LazyLoadImage src={celebrityS5 }     alt="picsum"/></div>
    <div className="wide"  ><LazyLoadImage src={celebrityL1}   alt="picsum"/></div>

    <div  ><LazyLoadImage src={celebrityS6  }     alt="picsum"/></div>
    <div className="tall"  ><LazyLoadImage src={celebrityS7}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={celebrityS8}     alt="picsum"/></div>
    <div className="tall"  ><LazyLoadImage src={celebrityP1}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={celebrityP2}     alt="picsum"/></div>
    
    <div  ><LazyLoadImage src={celebrityP3}     alt="picsum"/></div>

    <div  ><LazyLoadImage src={celebrityP4}     alt="picsum"/></div>
    <div className="big"  ><LazyLoadImage src={celebrityS2}     alt="picsum"/></div>

    <div  ><LazyLoadImage src={celebrityP5}    alt="picsum"/></div>
    <div  ><LazyLoadImage src={celebrityP6}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={celebrityP7}     alt="picsum"/></div>
    <div className="wide"  ><LazyLoadImage src={celebrityL2}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={celebrityP8}     alt="picsum"/></div>

    <div    ><LazyLoadImage src={celebrityS7 }   alt="picsum"/></div>

  </div>
</>  )
}

const PressandPraise = () => {
  return (
<>
<div className="gallery-div"> 

    <div className="big"   ><LazyLoadImage src={pandpS1}     alt="picsum"/></div>

  <div    ><LazyLoadImage src={pandpS3 }   alt="picsum"/></div>
    <div    ><LazyLoadImage src={pandpS4 }    alt="picsum"/></div>
    <div  ><LazyLoadImage src={pandpS5 }     alt="picsum"/></div>
    <div className="wide"  ><LazyLoadImage src={pandpL1}   alt="picsum"/></div>

    <div  ><LazyLoadImage src={pandpS6  }     alt="picsum"/></div>
    <div className="tall"  ><LazyLoadImage src={pandpS7}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={pandpS8}     alt="picsum"/></div>

    <div className="wide"  ><LazyLoadImage src={pandpL2}     alt="picsum"/></div>


  </div>
</>  )
}


const More = () => {
  return (
<>
<div className="gallery-div"> 

    <div className="big"   ><LazyLoadImage src={moreS1}     alt="picsum"/></div>

  <div    ><LazyLoadImage src={moreS3 }   alt="picsum"/></div>
    <div    ><LazyLoadImage src={moreS4 }    alt="picsum"/></div>
    <div  ><LazyLoadImage src={moreS5 }     alt="picsum"/></div>
    <div className="wide"  ><LazyLoadImage src={moreL1}   alt="picsum"/></div>

    <div  ><LazyLoadImage src={moreS6  }     alt="picsum"/></div>
    <div className="tall"  ><LazyLoadImage src={moreS7}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={moreS8}     alt="picsum"/></div>
    <div className="tall"  ><LazyLoadImage src={moreP1}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={moreP2}     alt="picsum"/></div>
    
    <div  ><LazyLoadImage src={moreP3}     alt="picsum"/></div>

    <div  ><LazyLoadImage src={moreP4}     alt="picsum"/></div>
    <div className="big"  ><LazyLoadImage src={moreS2}     alt="picsum"/></div>

    <div  ><LazyLoadImage src={moreP5}    alt="picsum"/></div>
    <div  ><LazyLoadImage src={moreP6}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={moreP7}     alt="picsum"/></div>
    <div className="wide"  ><LazyLoadImage src={moreL2}     alt="picsum"/></div>
    <div  ><LazyLoadImage src={moreP8}     alt="picsum"/></div>

    <div    ><LazyLoadImage src={moreS7 }   alt="picsum"/></div>

  </div>
</>  )
}
export { Bridal,Model,PressandPraise,More,Celebrity}
