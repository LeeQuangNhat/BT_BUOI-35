import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trangThaiGhe } from '../Redux/slice/gheNgoi';

const GheNgoi = ({ addGheNgoi }) => {
  const arrDanhSachGhe = useSelector(reducer => reducer.gheNgoi.arrDanhSachGhe);
  const dispatch = useDispatch();
  const [chonGhe, setChonGhe] = useState([]);

  const chonGheNgoi = (soGhe, isDaDat) => () => {
    if (isDaDat || chonGhe.includes(soGhe)) {
      return;
    }
    setChonGhe([...chonGhe, soGhe]);
    dispatch(trangThaiGhe({ soGhe, daDat: true }));
  };
  return (
    <table>
      <tbody>
        <tr>
          <td></td>
          {arrDanhSachGhe[0].danhSachGhe.map(item => (
            <td className="rowNumber text-center">{item.soGhe}</td>
          ))}
        </tr>
        {arrDanhSachGhe.slice(1).map(item => (
          <tr>
            <td className="firstChar" style={{ width: 'calc(100%/15)' }}>
              {item.hang}
            </td>
            {item.danhSachGhe.map((ghe, index) => (
              <td style={{ width: 'calc(100%/15)', margin: '10px 0' }}>
                <button
                  onClick={() => {
                    chonGheNgoi(ghe.soGhe, ghe.daDat)();
                    addGheNgoi(ghe);
                  }}
                  className={`ghe ${ghe.daDat ? 'gheDuocChon' : ''} ${
                    (chonGhe.includes(ghe.soGhe) ? 'gheDangChon' : '')
                  } ${ghe.daDat === '' ? '' : ''}`}
                >
                  {index + 1}
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GheNgoi;
