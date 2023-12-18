import { Fragment, useEffect, useState } from "react";

type SayacComponentPropType = {
  renk?: string;
  baslik?: string;
};

function SayacCompenent(prop: SayacComponentPropType) {
  const [sayac, sayaciDegistir] = useState(15);

  useEffect(() => {
    console.log("useEffect fonksiyonu çalıştı");
    console.log("sayacın şimdiki değeri", sayac);
  }, [sayac]);

  console.log("fonksiyon return çalıştı");
  return (
    <Fragment>
      <button
        onClick={() => {
          if (sayac > 0) {
            sayaciDegistir(sayac - 1);
          }
        }}
      >
        azalt
      </button>
      <p>
        {prop.baslik} :{" "}
        <span style={{ backgroundColor: prop.renk }}>{sayac}</span>
      </p>
      <button
        onClick={() => {
          sayaciDegistir(sayac + 1);
        }}
      >
        arttır{" "}
      </button>
    </Fragment>
  );
}

export default SayacCompenent;
