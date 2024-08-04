import React from 'react';
import { StyleSheet } from 'react-native';

import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';
import { Text } from '../core-ui';
import { CarouselItem } from '../types/types';

export const carouselData: Array<CarouselItem> = [
  {
    // render: () => (
    //   <Text weight="bold" style={styles.title}>
    //     {t('Sale')}
    //   </Text>
    // ),
    image:
      'https://bestbhav.co.in/cdn/shop/files/BANNER-2.jpg?v=1720281856',
    url:'babypalms.in',
  },
  {
    image:
      'https://bestbhav.co.in/cdn/shop/files/7_7bcaeb3c-097b-400e-80f9-856d4688256d.jpg?v=1700249809',
      url:'babypalms.in',
  },
  {
    image:
      'https://bestbhav.co.in/cdn/shop/files/2_91ee3e18-a5f5-4d3a-8a04-ebb476bd77e4.jpg?v=1700249856',
      url:'babypalms.in',
  },
];

// const styles = StyleSheet.create({
//   title: {
//     marginBottom: 20,
//     color: COLORS.white,
//     fontSize: FONT_SIZE.extraLarge,
//   },
// });
