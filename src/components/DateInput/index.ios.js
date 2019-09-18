import React, { useState, useMemo } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton } from './styles';

export default function DateInput({ date }) {
  const [opened, setOpened] = useState(false);

  const dateFormated = useMemo(
    () => format(date, "dd 'de' MMM 'de' YYYY", { locale: pt }),
    [date]
  );

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText />
      </DateButton>
    </Container>
  );
}
