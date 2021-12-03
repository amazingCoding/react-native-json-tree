import { createStyling } from 'react-base16-styling';
import solarized from './themes/solarized';

const colorMap = theme => ({
  ARROW_COLOR: theme.base0D,
  BACKGROUND_COLOR: theme.base00,
  BOOLEAN_COLOR: theme.base09,
  DATE_COLOR: theme.base0B,
  FUNCTION_COLOR: theme.base08,
  ITEM_STRING_COLOR: "#3E9ED0",
  ITEM_STRING_EXPANDED_COLOR: "#808080",
  LABEL_COLOR: "#000000",
  NUMBER_COLOR: theme.base09,
  NULL_COLOR: theme.base08,
  STRING_COLOR: "#3E9ED0",
  SYMBOL_COLOR: "#3E9ED0",
  TEXT_COLOR: theme.base07,
  UNDEFINED_COLOR: theme.base08,
});

const valueColorMap = colors => ({
  Boolean: colors.BOOLEAN_COLOR,
  Date: colors.DATE_COLOR,
  Function: colors.FUNCTION_COLOR,
  Number: colors.NUMBER_COLOR,
  Null: colors.NULL_COLOR,
  String: colors.STRING_COLOR,
  Symbol: colors.SYMBOL_COLOR,
  Undefined: colors.UNDEFINED_COLOR,
});

const getStylingFromBase16 = (base16Theme) => {
  const colors = colorMap(base16Theme);

  return {
    tree: {
      backgroundColor: colors.BACKGROUND_COLOR,
      padding: 5,
      
    },
    value: ({ style }) => ({
      style: {
        
        flexDirection: 'row',
        marginLeft: 10,
        
        ...style,
      },
    }),

    label: {
      color: colors.LABEL_COLOR,
      fontSize: 16,
      flexDirection: 'row',
      fontFamily: "Arial",
    },

    valueLabel: {
      marginBottom: 8,
      fontSize: 16,
      fontFamily: "Arial",
    },

    valueText: ({ style }, nodeType) => ({
      style: {
        color: valueColorMap(colors)[nodeType],
        marginLeft: 5,
        flexShrink: 1,
        fontSize: 16,
      fontFamily: "Arial",
        ...style,
      },
    }),

    itemRange: ({ style }, expanded) => ({
      style: {
        paddingLeft: expanded ? 10 : 0,
        paddingTop: expanded ? 5 : 0,
      },
    }),

    itemText: ({ style }, expanded) => ({
      style: {
        color: colors.LABEL_COLOR,
        paddingLeft: expanded ? 10 : 15,
        paddingTop: expanded ? 5 : 5,
        fontSize: 16,
        fontFamily: "Arial",
      },
    }),

    arrow: ({ style }, nodeType, expanded) => ({
      style: {
        fontSize: 15,
        marginLeft: 0,
        
        transform: expanded ? [{ rotate: '90deg' }] : [{ rotate: '0deg' }],
        ...style,
        color: expanded ? "#B3B3B3" : "#000000",
      },
    }),

    arrowContainer: ({ style }, arrowStyle) => ({
      style: {
        flexDirection: 'row',
        paddingLeft: arrowStyle === 'double' ? 5 : 0,
        paddingRight: 3,
        ...style,
      },
    }),

    // arrowSign: { color: colors.ARROW_COLOR },

    nestedNode: ({ style }, keyPath, nodeType, expanded, expandable) => ({
      style: {
        marginLeft: keyPath.length > 1 ? 7 : 0,
        paddingBottom: 5,
        paddingLeft: expandable ? 0 : 3,
        ...style,
      },
    }),

    nestedNodeLabel: ({ style }) => ({ style }),

    nestedNodeItemString: ({ style }, keyPath, nodeType, expanded) => ({
      style: {
        color: expanded ? colors.ITEM_STRING_EXPANDED_COLOR : colors.ITEM_STRING_COLOR,
        marginLeft: 5,
        ...style,
      },
    }),

    nestedNodeChildren: ({ style }) => ({
      style: {
        marginLeft: 6,
        // backgroundColor:'#ff00ff',
        borderLeftWidth:1,
        borderLeftColor:'#CCCCCC',
        paddingLeft:10,
        ...style,
      },
    }),
  };
};

const createStylingFromTheme = createStyling(getStylingFromBase16, {
  defaultBase16: solarized,
});

export default createStylingFromTheme;
