import incomeImg from "assets/income.svg";
import outcomeImg from "assets/outcome.svg";
import totalImg from "assets/total.svg";
import { useTransactions } from "hooks/useTransactions";

import { SummaryCard } from "./SummaryCard";
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposit += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
      }

      acc.total = acc.deposit - acc.withdraw;

      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  function setCardColor(currency: number) {
    return Math.sign(currency) >= 0 ? "green" : "red";
  }

  return (
    <Container>
      <SummaryCard
        cardTitle="Entradas"
        cardLogo={incomeImg}
        currencyValue={summary.deposit}
      />
      <SummaryCard
        cardTitle="Saídas"
        cardLogo={outcomeImg}
        currencyValue={summary.withdraw}
      />
      <SummaryCard
        cardTitle="Total"
        cardLogo={totalImg}
        cardColor={setCardColor(summary.total)}
        currencyValue={summary.total}
      />
    </Container>
  );
}
