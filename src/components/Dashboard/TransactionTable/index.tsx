import { useTransactions } from "hooks/useTransactions";
import { TransactionItem } from './TransactionItem';

import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Editar</th>
            <th>Remover</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length !== 0 ? (
            transactions.map((transaction) => (
              <TransactionItem  key={transaction.id} transaction={transaction} />
            ))
          ) : (
            <tr>
              <td colSpan={6}>Nenhuma transação foi cadastrada ainda.</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}
