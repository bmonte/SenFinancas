import useFormatCurrency from 'hooks/formatCurrency'

import { Container } from './styles';

type CardColor = 'red' | 'green';

interface SummaryCardProps {
  cardLogo: string;
  cardTitle: string;
  cardColor?: CardColor;
  currencyValue: number;
}

export function SummaryCard({ 
  cardLogo, 
  cardTitle, 
  cardColor ,
  currencyValue, 
}: SummaryCardProps) {
  const formatedValue = useFormatCurrency(currencyValue);

  return (
    <Container color={cardColor}>
      <header>
        <p>{cardTitle}</p>
        <img src={cardLogo} alt={cardTitle} />
      </header>

      <strong>
        {formatedValue}
      </strong>
    </Container>
  );
}
