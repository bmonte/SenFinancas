import { useState } from 'react';
import Modal from 'react-modal';

import incomeImg from 'assets/income.svg'
import outcomeImg from 'assets/outcome.svg'
import closeImg from 'assets/close.svg';
import { TransactionType } from 'models/Transaction'
import { useTransactions } from 'hooks/useTransactions';

import { Container, TransactionTypeContainer, TransactionButton } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  
  const [type, setType] = useState<TransactionType>('deposit');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [category, setCategory] = useState('');


  function handleCreateNewTransaction(event: React.FormEvent) {
    event.preventDefault();

    createTransaction({
      name,
      amount: amount ?? 0,
      type,
      category
    });

    setName('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        className="react-modal-close" 
        type="button" 
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal"/>
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          type="text" 
          placeholder="Nome" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        
        <input 
          type="number" 
          placeholder="Valor" 
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        
        <TransactionTypeContainer>
          <TransactionButton
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </TransactionButton>

          <TransactionButton
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </TransactionButton>
        </TransactionTypeContainer>
        
        <input 
          type="text"
          placeholder="Categoria" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        />
        
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}