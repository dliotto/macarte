import React from 'react';
import {ImageSourcePropType} from 'react-native';

export default interface CardProps {
  name: string;
  id: string;
  img: ImageSourcePropType;
  qtd?: number;
}
