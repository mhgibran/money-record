import { rupiah } from "../../utils/CurrencyFormat";
import "./SaldoText.css";

interface ContainerProps {
  saldo: number;
}

const SaldoText: React.FC<ContainerProps> = ({ saldo }) => {
  return <span className="text-blue">{rupiah(saldo)}</span>;
};

export default SaldoText;
