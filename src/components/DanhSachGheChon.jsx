import React from 'react';

const DanhSachGheChon = ({ arrCart, deleteSoGhe }) => {
  let classLi = 'flex items-center mb-4';
  let classTextLi = 'text-2xl text-white ps-3';
  let classTable =
    'border border-white px4 py-2 text-center text-xl text-white font-light ';
  const tongTien = arrCart.reduce((total, item) => total + item.gia, 0);
  return (
    <div className="w-4/12 me-10">
      <h1 className="text-white text-4xl  py-10 text-center">
        DANH SÁCH GHẾ BẠN CHỌN
      </h1>
      <ul>
        <li className={classLi}>
          <p className="gheDuocChon"></p>
          <p className={classTextLi}>Ghế đã đặt</p>
        </li>
        <li className={classLi}>
          <p className="gheDangChon"></p>
          <p className={classTextLi}>Ghế đang chọn</p>
        </li>
        <li className={classLi}>
          <p className="ghe"></p>
          <p className={classTextLi}>Ghế chưa đặt</p>
        </li>
      </ul>
      <table className=" w-full mt-10">
        <thead>
          <tr>
            <th className={classTable}>Số ghế</th>
            <th className={classTable}>Giá</th>
            <th className={classTable}>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {arrCart.map(item => (
            <tr>
              <td className={`${classTable} text-yellow-400`}>{item.soGhe}</td>
              <td className={`${classTable} text-yellow-400`}>{item.gia}</td>
              <td className={classTable}>
                <button
                  onClick={() => {
                    deleteSoGhe(item.soGhe);
                  }}
                  className="text-red-500 text-2xl "
                >
                  X
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td className={classTable}>Tổng tiền</td>
            <td className={`${classTable} text-yellow-400`}>{tongTien}</td>
            <td className={classTable}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DanhSachGheChon;
