import "./BankSummary.css";
import { rupiah } from "../utils/CurrencyFormat";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import jeniusImg from "../assets/img/bank/jenius.png";
import bcaImg from "../assets/img/bank/bca.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardBank from "./CardBank";
import SeeAllButton from "./button/SeeAll";

const BankSummary: React.FC = () => {
  const total = 1000000;
  const data = [
    {
      name: "Jenius",
      desc: "Saldo Aktif",
      saldo: 500000,
      logo: jeniusImg,
    },
    {
      name: "BCA",
      desc: "Saldo Utama",
      saldo: 500000,
      logo: bcaImg,
    },
  ];

  return (
    <IonGrid>
      <IonRow class="ion-margin-top ion-padding-horizontal">
        <IonCol size="12">
          <h6 className="text-muted ion-no-margin">Current Balance</h6>
        </IonCol>
        <IonCol size="12">
          <h1 className="text-blue ion-no-margin">{rupiah(total)}</h1>
        </IonCol>
      </IonRow>
      <IonRow class="ion-justify-content-between ion-align-items-center ion-padding-horizontal">
        <IonCol size="5" offset="7" class="ion-text-end ion-no-padding">
          <SeeAllButton />
        </IonCol>
      </IonRow>
      <Swiper
        spaceBetween={6}
        slidesPerView={1.2}
        className="ion-padding-horizontal"
      >
        {data && data.length
          ? data.map((item, index) => {
              return (
                <SwiperSlide key={`card-bank-${index}`}>
                  <CardBank
                    name={item.name}
                    saldo={item.saldo}
                    logo={item.logo}
                    desc={item.desc}
                  />
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
    </IonGrid>
  );
};

export default BankSummary;
