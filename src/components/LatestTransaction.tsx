import "./LatestTransaction.css";
import { IonCard, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import SeeAllButton from "./button/SeeAll";
import SaldoText from "./text/SaldoText";
import { dateFormat } from "../utils/DateTimeFormat";

interface ContainerProps {
  type: string;
}

const LatestTransaction: React.FC<ContainerProps> = ({ type }) => {
  const data = [
    {
      name: "Belanja Bulanan",
      total: 300000,
      created_at: "2023-09-10",
    },
    {
      name: "Bayar Tagihan Listrik",
      total: 200000,
      created_at: "2023-09-15",
    },
    {
      name: "Bayar Tagihan Air",
      total: 50000,
      created_at: "2023-09-15",
    },
  ];
  return (
    <IonGrid>
      <IonRow class="ion-justify-content-between ion-align-items-center ion-padding-horizontal">
        <IonCol size="7">
          <h6 className="text-muted">
            {type === "in" ? "Incoming" : "Outcoming"} Transactions
          </h6>
        </IonCol>
        <IonCol size="5" class="ion-text-end ion-no-padding">
          <SeeAllButton />
        </IonCol>
      </IonRow>
      {data && data.length
        ? data.map((item, index) => {
            return (
              <IonCard
                key={`card-in-transaction-${index}`}
                className="ion-margin-horizontal"
              >
                <IonRow class="ion-justify-content-between ion-align-items-center">
                  <IonCol size="2">
                    <IonImg
                      class="img-rounded img"
                      src={`https://ui-avatars.com/api/?name=${item.name}`}
                    />
                  </IonCol>
                  <IonCol size="6">
                    <p className="truncate">
                      {item.name} <br />
                      <small className="text-muted">
                        {dateFormat(item.created_at)}
                      </small>
                    </p>
                  </IonCol>
                  <IonCol size="4">
                    <SaldoText saldo={item.total} />
                  </IonCol>
                </IonRow>
              </IonCard>
            );
          })
        : ""}
    </IonGrid>
  );
};

export default LatestTransaction;
