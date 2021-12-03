import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View, Image, Platform } from 'react-native';

const JSONArrow = ({ arrowStyle, expanded, nodeType, onPress, styling }) => {
  // const styleArrow = {...styling('arrowContainer', arrowStyle)}
  const t = Platform.OS === 'android' ?3: 0
  return (
    <TouchableOpacity onPress={onPress}>
      <View {...styling('arrowContainer', arrowStyle)}>
        {
          expanded ? <Image style={{ marginTop: t, width: 15, height: 15 }} source={require("./icon-arrow-gray.png")} width={15} height={15} />
            : <Image Image style={{ marginTop: t, width: 15, height: 15 }} source={require("./icon-arrow.png")} width={15} height={15} />
        }
        {/* <Text {...styling(['arrow', 'arrowSign'], nodeType, expanded, arrowStyle)}>
          {'▶'}
        </Text> */}
        {/* {arrowStyle === 'double' ?
          <Text {...styling(['arrowSign', 'arrowSignInner'])}>{'▶'}</Text> :
          null} */}
      </View>
    </TouchableOpacity>
  )
};

JSONArrow.propTypes = {
  arrowStyle: PropTypes.oneOf(['single', 'double']),
  expanded: PropTypes.bool.isRequired,
  nodeType: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  styling: PropTypes.func.isRequired,
};

JSONArrow.defaultProps = {
  arrowStyle: 'single',
};

export default JSONArrow;
