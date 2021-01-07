import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Gap, Header, HeaderLogin, Input, Loading } from '../../components/index-components'
import Fire from '../../config/firebase'
import { colors } from '../../utils/color'
import { useForm } from '../../utils/useForm'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData } from '../../utils/index-utils';
import {showError,showSuccess} from '../../utils/showMessage/show-message';
import {useDispatch} from 'react-redux';


const RegisterScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [form, setForm] = useForm({
      fullname: '',
      category: 'petani ladang',
      taniCenter: '',
      phone_number: '',
      taniCenter_address: '',
      verifikasi: 'terverifikasi',
      email: '',
      password: '',
    });
    const [itemCategory] = useState([
      {
        id: 1,
        label: 'Petani Ladang',
        value: 'petani ladang',
      },
      {
        id: 2,
        label: 'Petani Buah',
        value: 'petani buah',
      },
      {
        id: 3,
        label: 'Petani Bunga',
        value: 'petani bunga',
      },
      {
        id: 4,
        label: 'Petani Kebun',
        value: 'petani kebun',
      },
    ]);
  
    const [itemVerived] = useState([
      {
        id: 1,
        label: 'Terverifikasi',
        value: 'terverifikasi',
      },
      {
        id: 2,
        label: 'Belum Verifikasi',
        value: 'belumVerifikasi',
      },
    ]);
  
    const onContinue = () => {
      dispatch({type: 'SET_LOADING', value: true});
      Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then(success => {
          dispatch({type: 'SET_LOADING', value: false});
          setForm('reset');
          const data = {
            fullname: form.fullname,
            profession: form.category,
            category: form.category,
            rate: 0,
            taniCenter: form.taniCenter,
            phone_number: form.phone_number,
            taniCenter_address: form.taniCenter_address,
            verifikasi: form.verifikasi,
            email: form.email,
            uid: success.user.uid,
          };
  
          Fire.database()
            .ref(`mentors/${success.user.uid}/`)
            .set(data);
  
          storeData('user', data);
          navigation.navigate('UploadPhoto', data);
        })
        .catch(err => {
          dispatch({type: 'SET_LOADING', value: false});
          
          showError(err.message);
          console.log('error:',  err);
        });
    };
    return (
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullname}
              onChangeText={value => setForm('fullname', value)}
            />
            <Gap height={24} />
            <Input
              label="Kategori"
              value={form.category}
              onValueChange={value => setForm('category', value)}
              select
              selectItem={itemCategory}
            />
            <Gap height={24} />
            <Input
              label="Tani Center"
              value={form.taniCenter}
              onChangeText={value => setForm('taniCenter', value)}
            />
            <Gap height={24} />
            <Input
              label="Nomor Handphone"
              value={form.phone_number}
              onChangeText={value => setForm('phone_number', value)}
            />
            <Gap height={24} />
            <Input
              label="Alamat Tani Center"
              value={form.taniCenter_address}
              onChangeText={value => setForm('taniCenter_address', value)}
            />
            <Gap height={24} />
            <Input
              label="Verifikasi"
              value={form.verifikasi}
              onValueChange={value => setForm('verifikasi', value)}
              select
              selectItem={itemVerived}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
            <Gap height={40} />
          </ScrollView>
        </View>
      </View>
    );
  };
  
  export default RegisterScreen;
  
  const styles = StyleSheet.create({
    page: {backgroundColor: colors.white, flex: 1},
    content: {paddingHorizontal: 40, flex: 1},
  });
  