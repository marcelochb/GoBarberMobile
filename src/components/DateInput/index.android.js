import React, { useMemo } from 'react';
import { DatePickerAndroid } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const dateFormated = useMemo(
    () => format(date, "dd 'de' MMM 'de' yyyy", { locale: pt }),
    [date]
  );

  async function handleOpenPick() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    if (action === DatePickerAndroid.dateSetAction) {
      const selectdDate = new Date(year, month, day);

      onChange(selectdDate);
    }
  }

  return (
    <Container>
      <DateButton onPress={handleOpenPick}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormated}</DateText>
      </DateButton>
    </Container>
  );
}
