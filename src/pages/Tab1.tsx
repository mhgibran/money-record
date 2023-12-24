import { IonContent, IonPage } from "@ionic/react";
import "./Tab1.css";
import BankSummary from "../components/BankSummary";
import ListTransaction from "../components/ListTransaction";

const Tab1: React.FC = () => {
  const incomingTransactions: {
    name: string;
    total: number;
    created_at: string;
    type: string;
  }[] = [
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
  const outcomingTransactions: {
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
  ];
  return (
    <IonPage>
      <IonContent fullscreen>
        <BankSummary />
        <ListTransaction
          title="Incoming Transaction"
          seeAll={true}
          data={incomingTransactions}
        />
        <ListTransaction
          title="Outcoming Transaction"
          seeAll={true}
          data={outcomingTransactions}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
