import { TextAreaVariables } from './textAreaVariables';
import { ComponentSlotStylesPrepared, ICSSInJSStyle, margin, padding } from '@fluentui/styles';
import { TextAreaStylesProps } from '../../../../components/TextArea/TextArea';

const textAreaStyles: ComponentSlotStylesPrepared<TextAreaStylesProps, TextAreaVariables> = {
  root: ({ props: p, variables: v }): ICSSInJSStyle => ({
    ...margin(v.padding),
    height: v.height,

    backgroundColor: v.backgroundColor,
    ...(p.inverted && {
      backgroundColor: v.invertedBackgroundColor,
    }),

    color: v.fontColor,

    borderColor: v.borderColor,
    borderRadius: v.borderRadius,
    borderStyle: 'solid',
    borderWidth: v.borderWidth,

    outline: 0,
    ...padding(v.padding),

    resize: p.resize || 'none',

    ...(p.fluid && {
      width: '100%',
    }),

    ...(p.disabled && {
      pointerEvents: 'none',
      backgroundColor: v.disabledBackgroundColor,
      color: v.disabledColor,
    }),

    '::placeholder': {
      color: v.placeholderColor,
      opacity: 1, // undo Firefox default opacity
    },

    ':focus': {
      borderColor: v.borderColorFocus,
    },
  }),
};

export default textAreaStyles;
