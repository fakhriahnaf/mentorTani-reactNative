import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../../utils/color'
import { fonts } from '../../../utils/font'
import {PickerIOS} from '@react-native-community/picker';


const Input = ({label, value, onChangeText, secureTextEntry, disable, select, onValueChange, selectItem,}) => {
    //efek glow and blur
    const [border, setBorder] = useState(colors.border);
    const onFocusForm = () => {
        setBorder(colors.tertiary);
    };
    //supaya gak blur 
    const onBlurForm = () => {
        setBorder(colors.border);
    };
    if (select) {
        return (
          <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.picker}>
              <PickerIOS selectedValue={value} onValueChange={onValueChange}>
                {selectItem.map(item => {
                  return (
                    <PickerIOS.Item
                      key={item.id}
                      label={item.label}
                      value={item.value}
                    />
                  );
                })}
              </PickerIOS>
            </View>
          </View>
        );
      }
    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}> {label}</Text>
            <TextInput 
                onFocus={onFocusForm} 
                onBlur={onBlurForm} 
                style={styles.input(border)} 
                value={value} 
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                editable={!disable}
                selectTextOnFocus={!disable }>
                
            </TextInput>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    input : border => ({
        borderWidth: 1,
        borderColor : border,
        borderRadius: 10,
        height: 48,
        padding: 13,
        //fontFamily: fonts.primary.normal,
        fontSize: 14,
        //color: colors.text.secondary
    }), 
    textLabel : {
        fontSize: 18,
        paddingBottom: 10,
        color : colors.text.primary,
        fontFamily: fonts.primary[400],
    },
    container :{
        paddingTop: 10,
        paddingBottom: 10,
    }
})
