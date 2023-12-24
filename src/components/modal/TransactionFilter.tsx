import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonModal,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef, useState } from "react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { closeOutline } from "ionicons/icons";

interface FilterByDate {
  id: number;
  name: string;
}

const filterByDates: FilterByDate[] = [
  {
    id: 1,
    name: "7 hari terakhir",
  },
  {
    id: 2,
    name: "30 hari terakhir",
  },
  {
    id: 3,
    name: "Custom",
  },
];

const compareWith = (o1: FilterByDate, o2: FilterByDate) => {
  return o1.id === o2.id;
};

const TransactionFilter: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  const [filterAmount, setFilterAmount] = useState<{
    from: number;
    to: number;
  }>({
    from: 0,
    to: 0,
  });
  const [filterByDate, setFilterByDate] = useState<{
    id: number;
    name: string;
  }>({
    id: 0,
    name: "",
  });

  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === "confirm") {
      // do apply
    }
  }

  return (
    <IonModal
      ref={modal}
      trigger="filter"
      onWillDismiss={(ev) => onWillDismiss(ev)}
    >
      <IonToolbar>
        <IonTitle class="fw-bold">Filter</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={() => modal.current?.dismiss()}>
            <IonIcon icon={closeOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonContent className="ion-padding">
        <IonRow class="ion-margin-bottom">
          <IonCol size="12" class="ion-padding-horizontal">
            <div className="fw-medium">Besar Transaksi</div>
          </IonCol>
          <IonCol size="6">
            <IonItem>
              <IonInput
                type="number"
                placeholder="From"
                id="amountFrom"
                value={filterAmount.from || ""}
                onIonInput={(e: any) =>
                  setFilterAmount({
                    ...filterAmount,
                    from: e.target.value,
                  })
                }
              ></IonInput>
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
              <IonInput
                type="number"
                placeholder="To"
                id="amountTo"
                value={filterAmount.to || ""}
                onIonInput={(e: any) =>
                  setFilterAmount({
                    ...filterAmount,
                    to: e.target.value,
                  })
                }
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow class="ion-margin-bottom">
          <IonCol size="12" class="ion-padding-horizontal">
            <div className="fw-medium">Rentang Waktu</div>
          </IonCol>
          <IonCol>
            <IonList>
              <IonRadioGroup
                compareWith={compareWith}
                onIonChange={(ev) => setFilterByDate(ev.detail.value)}
              >
                {filterByDates && filterByDates.length
                  ? filterByDates.map((item, index) => {
                      return (
                        <IonItem key={`radio-filter-by-date-${index}`}>
                          <IonRadio key={item.id} value={item}>
                            {item.name}
                          </IonRadio>
                        </IonItem>
                      );
                    })
                  : ""}
              </IonRadioGroup>
            </IonList>
          </IonCol>
        </IonRow>
      </IonContent>
      <IonFooter class="ion-padding">
        <IonButton expand="full" size="large" onClick={() => confirm()}>
          Apply
        </IonButton>
      </IonFooter>
    </IonModal>
  );
};

export default TransactionFilter;
