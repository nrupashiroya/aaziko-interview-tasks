import React from 'react'

const SliderItem = ({ itemDetails }) => {
  const decodeHtmlEntities = (str) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  };

  return (
    <>
      <div className='sliderDiv'>
        <img src={itemDetails.image} alt={itemDetails.title} />
        <div className='sliderTxt'>
          <p>{itemDetails.title}</p>
          <h3
            dangerouslySetInnerHTML={{
              __html: decodeHtmlEntities(
                itemDetails?.description || ""
              ),
            }}
          />
        </div>


      </div>
    </>
  )
}

export default SliderItem