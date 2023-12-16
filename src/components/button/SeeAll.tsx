import { IonButton, IonIcon } from "@ionic/react";
import "./SeeAll.css";
import { chevronForwardOutline } from "ionicons/icons";

const SeeAllButton: React.FC = () => {
  return (
    <IonButton className="ion-no-padding" fill="clear">
      See All <IonIcon icon={chevronForwardOutline}></IonIcon>
    </IonButton>
  );
};

export default SeeAllButton;
