import Offers from './../Offers/Offers.js';
import data from "../../data.json";
import './Main.scss';

function Main() {
  return (
    <main className="main">
      <div className='container'>
        <Offers items={data.offers}></Offers>
      </div>
    </main>
  );
}

export default Main;
