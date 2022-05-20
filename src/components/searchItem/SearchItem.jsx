import { useNavigate } from "react-router-dom";
import "./searchItem.css";
const SearchItem = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hotels/a");
  };
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max500/88692583.jpg?k=bf17849699a57c81c033dc21050062c071ce6d6282f4e74181ce6acc47ba9f33&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with air conditioning
        </span>
        <span className="siFeatures">
          Entire Studio . 1 bathroom . 21m <sup>2</sup> 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTextOp">Includes taxes and fees</span>
          <button onClick={handleClick} className="siCheckButton">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
