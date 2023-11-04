import { useState } from 'react';
import './Offer.scss';

function Offer({ data, className }) {
  const [isSelected, setIsSelected] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const isDisabled = data.isDisabled;

  const classIsDisabled = isDisabled ? "offer_disabled " : "";
  const classIsSelected = isSelected ? "offer_selected " : "";
  const classProps = className ? className : ""; 
  
  const classFull =  "offer " + classIsDisabled + classIsSelected + classProps;

  const description = () => {
    if(isDisabled) {
      return <p className="offer__description offer__description_disabled">Sorry, the discount is unavailable</p>;
    } else if (isSelected) {
      return <p className="offer__description">Special offer for everyone!</p>
    } else {
      return <p className="offer__description">Get an extra <span className="offer__descriptionSelected">FREE</span> gutter cleaning!</p>
    }
  }

  const onClick = () => {
    if(!isDisabled) {
      setIsSelected(!isSelected);
    }
  }
  
  return (
    <div className={classFull}>
      <div className="offer__block offer__block_usa" onClick={onClick} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <div className="offer__wrapper">
          <p className="offer__title">{data.title}</p>
          {isHover&&isSelected ?  <p className="offer__subtitle">Excellent decision!</p> : <p className="offer__subtitle">{data.subtitle}</p>}
          <div className="offer__imgBlock">
            {data.saleOff ? 
              <div className="offer__label">
                <span className="offer__labelTop">{data.saleOff}</span>
                <span className="offer__labelBottom">%OFF</span>
              </div> 
            : null}
            <picture>
              {data.img.srcWebp ? <source srcSet={data.img.srcWebp} type="image/webp" /> : null}
              <img className="offer__img" srcSet={data.img.srcJpg} alt={data.img.title} type="image/jpeg" title={data.img.title} width="315" height="213" />
            </picture>
          </div>
        </div>
      </div>
      {description()}
    </div>
  );
}

export default Offer;
