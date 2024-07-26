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
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.medium,
    backgroundColor: colors.snow,
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
    marginBottom: spacing.medium, // 确保每个itemContainer之间有间隔
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
  dropdownContainer: {
    marginBottom: spacing.medium,
    width: '100%',
    zIndex: 1000,
  },
  dropdownLabel: {
    marginBottom: spacing.small,
    fontSize: typography.fontSizeMedium,
    fontWeight: typography.fontWeightBold,
  },
  dropdown: {
    backgroundColor: colors.snow,
  },
  dropdownContainerStyle: {
    maxHeight: 300,
    backgroundColor: colors.snow,
  },
  dropdownLabelStyle: {
    color: colors.black,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.medium,
  },
  label: {
    fontSize: typography.fontSizeMedium,
    marginLeft: spacing.small,
    flex: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
  },
  dateContainer: {
    marginBottom: spacing.medium,
    width: '100%',
  },
  dateLabel: {
    fontSize: typography.fontSizeMedium,
    fontWeight: typography.fontWeightBold,
    marginBottom: spacing.small,
  },
  dateInput: {
    height: 40,
    borderColor: colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: spacing.small,
    borderRadius: 5,
  },
  inputContainer: {
    marginBottom: spacing.medium,
    width: '100%',
  },
  inputLabel: {
    fontSize: typography.fontSizeMedium,
    fontWeight: typography.fontWeightBold,
    marginBottom: spacing.small,
  },
  input: {
    height: 40,
    borderColor: colors.black,
    borderWidth: 1,
    paddingLeft: spacing.small,
    borderRadius: 5,
  },
  flatListContainer: {
    flex: 1,
    padding: spacing.medium,
  },
  settingsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsHeading: {
    fontSize: typography.fontSizeLarge,
    fontWeight: typography.fontWeightBold,
    marginBottom: spacing.large,
  },
  settingsButtonText: {
    fontSize: typography.fontSizeMedium,
    fontWeight: typography.fontWeightBold,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: spacing.medium,
  },
  buttonCancel: {
    backgroundColor: colors.red,
    width: '45%', 
    alignItems: 'center',
    padding: spacing.small,
    borderRadius: 5,
  },
  buttonSave: {
    backgroundColor: colors.blue,
    width: '45%', 
    alignItems: 'center',
    padding: spacing.small,
    borderRadius: 5,
  },
  text: {
    color: colors.white,
    fontWeight: typography.fontWeightBold,
  },
});

export default {
  colors,
  spacing,
  typography,
  commonStyles,
};
