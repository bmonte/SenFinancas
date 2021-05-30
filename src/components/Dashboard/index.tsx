import { FiltersProvider } from 'hooks/useFilters';

import { Summary } from './Summary';
import { Filters } from './Filters';
import { TransactionsTable } from './TransactionTable';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <FiltersProvider>
        <Summary />
        <Filters />
        <TransactionsTable />
      </FiltersProvider>
    </Container>
  )
}