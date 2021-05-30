import { useFilters } from "hooks/useFilters";

import { TransactionItem } from "./TransactionItem";
import { Container } from "./styles";

export function TransactionsTable() {
  const { filteredTransactions } = useFilters();
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th colSpan={2}></th>
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.length !== 0 ? (
            filteredTransactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))
          ) : (
            <tr>
              <td colSpan={5}>Nenhuma transação foi cadastrada ainda.</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}
