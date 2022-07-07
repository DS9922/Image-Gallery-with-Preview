import { useState } from 'react'
import './wsp-gallery.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'

const WSPGallery = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  return (
    <div>

        {openModal &&
            <div className='sliderWrap'>
                <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}/>
                <div className='fullScreenImage'>
                    <img src={galleryImages[slideNumber].img} alt=''/>
                </div>
            </div>
        }
    
        <div className='galleryWrap'>
            {
                galleryImages && galleryImages.map((slide, index) => {
                    return(
                        <div 
                            className='single' 
                            key={index}
                            onClick={ () => handleOpenModal(index)}
                        >
                            <img src={slide.img} alt=''/>
                        </div>
                    )
                }) 
            }
        </div>

    </div>
  )
}

export default WSPGallery