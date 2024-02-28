import { useEffect, useState } from "react";
import axios from "axios";
import { Skil } from "./test";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";
import "./index.css";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchData() {
      axios
        .get("https://versionallami.onrender.com/12/fetch")
        .then((res) => setData(res.data));
    }
    fetchData();
  }, []);

  return (
    <div className="bg-slate-100  flex flex-col   w-full">
      {data.map((elemnt, key) => {
        return <Card key={key} data={elemnt} />;
      })}
    </div>
  );
}

function Card({ data }) {
  return (
    <div className="rounded-3xl border-2 flex flex-col  my-8 border-black w-[95%] h-fit mx-auto">
      <div className="flex flex-col lg:flex-row" >
        <div id="info" className="pl-6 p-4 rounded-3xl w-full lg:w-[50%]">
          <h1 className="text-3xl my-4 font-bold "> {data.fullname} </h1>
          <p className="flex gap-3 uppercase">
            <span>
              <img src={icon1} alt="..." />
            </span>
            {data.grade}{" "}
          </p>
          <p className="flex gap-3">
            <span>
              <img src={icon2} alt="..." />
            </span>
            {data.email}{" "}
          </p>
          <p className="flex gap-3">
            <span>
              <img src={icon3} alt="..." />
            </span>
            {data.phonenumber}{" "}
          </p>
          <p className="flex gap-3">
            <span>
              <img src={icon4} alt="..." />
            </span>
            {data.idnumber}{" "}
          </p>
        </div>
        <div id="details" className="w-full lg:w-[50%] p-4 pl-6 rounded-3xl">
          <h2 className="text-lg font-bold lg:ml-4" >Skils :</h2>
          <div className="w-full my-6 h-fit flex flex-wrap">
            {Skil(data.Skills).map((e, id) => {
              return <Bobble key={id} info={e} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-full pl-6 pr-4 py-6 ">
        <h2 className="font-bold mb-2">Details :</h2>
        <p>
        {data.desc}
        </p>
      </div>
    </div>
  );
}

function Bobble({ info }) {
  return (
    <span className="px-6 py-2 m-2 bg-slate-200 rounded-full">{info}</span>
  );
}

export default App;
