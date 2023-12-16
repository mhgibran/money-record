import { IonContent, IonPage } from "@ionic/react";
import "./Tab1.css";
import BankSummary from "../components/BankSummary";
import LatestTransaction from "../components/LatestTransaction";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <BankSummary />
        <LatestTransaction type="in" />
        <LatestTransaction type="out" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
