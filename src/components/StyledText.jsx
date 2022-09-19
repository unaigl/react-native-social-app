import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  textAlignCenter: {
    textAlign: 'center'
  }
})

// ERR Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
// I think this solution is a workaround solution. Because both Child and Parent component are class component. Not the function component.
// So I think react should support function component use ref the same as class component.
const StyledText = React.forwardRef(({ align, children, color, fontSize, fontWeight, style, ...restOfProps }, ref) => {
  const textStyles = [
    styles.text,
    align === 'center' && styles.textAlignCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    style,
    ref
  ]

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
})

export default StyledText