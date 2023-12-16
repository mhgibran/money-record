import "./CardBank.css";
import { rupiah } from "../utils/CurrencyFormat";
import { IonCard, IonCol, IonImg, IonRow } from "@ionic/react";
import "swiper/css";
import SaldoText from "./text/SaldoText";

interface ContainerProps {
  name: string;
  saldo: number;
  logo: any;
  desc: string;
}

const CardBank: React.FC<ContainerProps> = ({ name, saldo, logo, desc }) => {
  return (
    <IonCard className="card-bank ion-no-margin">
      <IonRow class="ion-justify-content-between ion-align-items-center">
        <IonCol size="3">
          <IonImg src={logo} />
        </IonCol>
        <IonCol size="5">
          <p>
            {name} <br />
            <small className="text-muted">{desc}</small>
          </p>
        </IonCol>
        <IonCol size="4">
          <SaldoText saldo={saldo} />
        </IonCol>
      </IonRow>
    </IonCard>
  );
};

export default CardBank;
