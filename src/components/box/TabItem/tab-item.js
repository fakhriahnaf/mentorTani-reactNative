import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import { color } from 'react-native-reanimated'
import { IconFarmer, IconFarmerActive, IconMessage, IconMessagesActive, IconTaniCenter, IconTaniCenterActive } from '../../../assets/icons'
import { colors } from '../../../utils/color'
import { fonts } from '../../../utils/font'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
      if (title === 'Mentor') {
        return active ? <IconFarmerActive /> : <IconFarmer />;
      }
      if (title === 'Messages') {
        return active ? <IconMessagesActive /> : <IconMessage />;
      }
      if (title === 'TaniCenter') {
        return active ? <IconTaniCenterActive/> : <IconTaniCenter />;
      }
      return <IconFarmer />;
    };
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        onLongPress={onLongPress}>
        <Icon />
        <Text style={styles.text(active)}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  export default TabItem;
  
  const styles = StyleSheet.create({
    container: {alignItems: 'center'},
    text: active => ({
      fontSize: 10,
      color: active ? colors.text.menuActive : colors.text.menuInactive,
      fontFamily: fonts.primary[600],
      marginTop: 4,
    }),
  });
  
