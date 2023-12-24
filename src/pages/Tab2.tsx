import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import { addOutline, funnelOutline } from "ionicons/icons";
import ListTransaction from "../components/ListTransaction";
import TransactionFilter from "../components/modal/TransactionFilter";

const Tab2: React.FC = () => {
  const data: {
    name: string;
    total: number;
    created_at: string;
    type: string;
  }[] = [
    {
      name: "Belanja Bulanan",
      total: 300000,
      created_at: "2023-09-10",
      type: "out",
    },
    {
      name: "Bayar Tagihan Listrik",
      total: 200000,
      created_at: "2023-09-15",
      type: "out",
    },
    {
      name: "Bayar Tagihan Air",
      total: 50000,
      created_at: "2023-09-15",
      type: "out",
    },
    {
      name: "Gaji Bulanan",
      total: 1000000,
      created_at: "2023-08-10",
      type: "in",
    },
    {
      name: "Pendapatan Lain",
      total: 1000000,
      created_at: "2023-08-30",
      type: "in",
    },
  ];
  return (
    <IonPage>
      <IonToolbar>
        <IonTitle class="fw-bold">In & Out</IonTitle>
        <IonButtons slot="end">
          <IonButton id="filter">
            <IonIcon slot="icon-only" icon={funnelOutline}></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonContent fullscreen>
        <ListTransaction title="Des 2023" data={data} />
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton className="ion-margin-bottom">
            <IonIcon icon={addOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
        <TransactionFilter />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
