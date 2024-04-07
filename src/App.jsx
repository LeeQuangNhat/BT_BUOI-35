import { useState } from 'react';
import './components/style.css';
import GheNgoi from './components/GheNgoi';
import DanhSachGheChon from './components/DanhSachGheChon';

function App() {
  const [arrCart, setArrCart] = useState([]);
  console.log(arrCart);
  const addGheNgoi = ghe => {
    const index = arrCart.findIndex(item => item.soGhe === ghe.soGhe);
    console.log(index);
    if (index === -1) {
      setArrCart([...arrCart, { ...ghe }]);
    }
  };
  const deleteSoGhe = ghe => {
    let index = arrCart.findIndex(item => {
      return item.soGhe == ghe;
    });
    if (index !== -1) {
      let newArrCart = [...arrCart];
      newArrCart[index].daDat = '';
      newArrCart.splice(index, 1);
      setArrCart(newArrCart);
    }
  };
  return (
    <div className="movie flex  py-5 ">
      <div className=" w-8/12">
        <div className="flex flex-col items-center">
          <h1 className="text-yellow-400 text-4xl pb-5 ">
            ĐẶT VÉ XEM PHIM CYBERLEARN.VN
          </h1>
          <p className="text-white text-xl">Màn hình</p>
          <div className="screen" />
          <GheNgoi addGheNgoi={addGheNgoi} />
        </div>
      </div>
      <DanhSachGheChon arrCart={arrCart} deleteSoGhe={deleteSoGhe} />
    </div>
  );
}

export default App;
