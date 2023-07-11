import React from 'react';
import { Spend, Save, Borrow } from '.';

export const HomeScreens = [
  {
    id: 0,
    name: 'Spend',
    screen: <Spend />,
    color: '#cecece',
  },
  {
    id: 1,
    name: 'Save',
    screen: <Save />,
    color: '#6b9656',
  },
  {
    id: 2,
    name: 'Borrow',
    screen: <Borrow />,
    color: '#33c7ef',
  },
];
