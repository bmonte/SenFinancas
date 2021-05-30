import { useMemo } from "react";

function useFormatCurrency(value: number) {
  return useMemo(
    () =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value),
    [value]
  );
}

export default useFormatCurrency;
