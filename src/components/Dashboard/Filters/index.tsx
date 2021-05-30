import { useState, useEffect, useMemo } from 'react'

import { useFilters } from  'hooks/useFilters'
import { TransactionType, TransactionCategory } from 'models/Transaction'
import { Filters as IFilter, SortBy } from 'models/Filters'

import { Container } from './styles'

const transactionOptions = [
  { id: 1, value: "Moradia", type: "home" },
  { id: 2, value: "Contas", type: "bills" },
  { id: 3, value: "Educação", type: "education" },
  { id: 4, value: "Comida", type: "food" },
  { id: 5, value: "Saúde", type: "health" },
  { id: 6, value: "Lazer", type: "leisure" },
  { id: 7, value: "Mercado", type: "supermarket" },
  { id: 8, value: "Transporte", type: "transport" },
  { id: 9, value: "Outros", type: "other" },
];

export function Filters() {
  const { updateFilters } = useFilters();

  const [type, setType] = useState<TransactionType>();
  const [category, setCategory] = useState<TransactionCategory>();
  const [sortBy, setSortBy] = useState<SortBy>();
  const [search, setSearch] = useState<string>('');

  const filterOptions: IFilter = useMemo(() => ({
    filterType: type,
    filterCategory: category,
    sortOrder: sortBy,
    searchBy: search
  }), [type, category, sortBy, search])

  useEffect(() => {
    updateFilters(filterOptions);
  }, [updateFilters, filterOptions]);

  return (
    <Container>
      <h3>Filtros</h3>

      <form>
        <input
          type="text"
          placeholder="Nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          onChange={(e) => setType(e.target.value as TransactionType)}
          defaultValue={""}
        >
          <option value="">
            Todos os tipos
          </option>

          <option value="deposit">
            Entrada
          </option>

          <option value="withdraw">
            Saída
          </option>
        </select>

        <select
          onChange={(e) => setCategory(e.target.value as TransactionCategory)}
          defaultValue={""}
        >
          <option value="">Todas as categorias</option>
          {transactionOptions.map((transaction) => (
            <option
              key={transaction.id}
              value={transaction.type}
            >
              {transaction.value}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setSortBy(e.target.value as SortBy)}
          defaultValue={"dateDesc"}
        >
          <option value="valueAsc">
            Valor crescente
          </option>

          <option value="valueDesc">
            Valor decrescente
          </option>

          <option value="dateAsc">
            Data crescente
          </option>

          <option value="dateDesc">
            Data decrescente
          </option>
        </select>
      </form>
    </Container>
  )
}