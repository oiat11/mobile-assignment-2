import { StyleSheet } from 'react-native';

export const colors = {
  jet: '#484349',
  snow: '#f7f0f0',
  electricBlue: '#8af3ff',
  persianGreen: '#18a999',
  shamrockGreen: '#109648',
  warning: '#f39c12',
  black: '#000',
  white: '#fff',
  gray: '#7f8c8d',
  blue: '#3498db',
  red: '#e74c3c',
  yellow: '#f1c40f',
  lightGray: '#ddd',
};

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

export const typography = {
  fontSizeSmall: 14,
  fontSizeMedium: 18,
  fontSizeLarge: 24,
  fontWeightRegular: '400',
  fontWeightBold: '700',
};

export const commonStyles = StyleSheet.create({
  button: {
    padding: spacing.medium,
    borderRadius: 5,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  headerRight: {
    marginRight: spacing.medium,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.jet,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPrimary: {
    color: colors.jet,
    fontSize: typography.fontSizeMedium,
  },
  textSecondary: {
    color: colors.gray,
    fontSize: typography.fontSizeSmall,
  },
  iconPrimary: {
    color: colors.electricBlue,
  },
  iconSecondary: {
    color: colors.persianGreen,
  },
  pressable: {
    borderRadius: 5,
  },
  pressedStyle: {
    backgroundColor: colors.lightGray,
  },
  itemContainer: {
    padding: spacing.medium,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 5,
    marginBottom: spacing.medium,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityType: {
    fontWeight: typography.fontWeightBold,
    flex: 1,
  },
  dateText: {
    marginHorizontal: spacing.small,
  },
  durationText: {
    marginHorizontal: spacing.small,
  },
  descriptionText: {
    fontWeight: typography.fontWeightBold,
    flex: 1,
  },
  icon: {
    marginHorizontal: spacing.small,
  },
});

export default {
  colors,
  spacing,
  typography,
  commonStyles,
};
