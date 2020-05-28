import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';
import { pxToRem } from '../../../../utils';
import getBorderFocusStyles from '../../getBorderFocusStyles';
import { TreeItemStylesProps } from '../../../../components/Tree/TreeItem';
import { treeTitleClassName } from '../../../../components/Tree/TreeTitle';

const treeItemStyles: ComponentSlotStylesPrepared<TreeItemStylesProps> = {
  root: ({ theme: { siteVariables }, props: p }): ICSSInJSStyle => ({
    listStyleType: 'none',

    paddingBottom: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: pxToRem(1 + (p.level - 1) * 10),

    ...getBorderFocusStyles({ variables: siteVariables })[':focus'],
    ':focus-visible': {
      outline: 0,
      [`> .${treeTitleClassName}`]: {
        position: 'relative',
        ...getBorderFocusStyles({ variables: siteVariables })[':focus-visible'],
      },
    },
  }),
};

export default treeItemStyles;
