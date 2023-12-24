import "./ListTransaction.css";
import { IonCard, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import SeeAllButton from "./button/SeeAll";
import SaldoText from "./text/SaldoText";
import { dateFormat } from "../utils/DateTimeFormat";

interface DataTransaction {
  name: string;
  total: number;
  created_at: string;
  type: string;
}

interface ContainerProps {
  title: string;
  data: DataTransaction[];
  seeAll?: boolean;
}

const ListTransaction: React.FC<ContainerProps> = ({
  title,
  data,
  seeAll = false,
}) => {
  return (
    <IonGrid>
      <IonRow class="ion-justify-content-between ion-align-items-center ion-padding-horizontal">
        <IonCol size="7">
          <h6 className="text-muted">{title}</h6>
        </IonCol>
        {seeAll ? (
          <IonCol size="5" class="ion-text-end ion-no-padding">
            <SeeAllButton />
          </IonCol>
        ) : (
          ""
        )}
      </IonRow>
      {data && data.length
        ? data.map((item, index) => {
            return (
              <IonCard
                key={`card-in-transaction-${index}`}
                className="ion-margin-horizontal border-radius-2"
              >
                <IonRow class="ion-justify-content-between ion-align-items-center">
                  <IonCol size="2">
                    <IonImg
                      class="img"
                      src={`https://ui-avatars.com/api/?name=${
                        item.name
                      }&background=${
                        item.type === "out" ? "7d8bcf" : "8ad6e8"
                      }&color=ffff&rounded=true`}
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

export default ListTransaction;
