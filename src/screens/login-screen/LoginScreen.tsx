import React, { FC } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Button } from "../../components";
import styles from "./LoginScreen.styles";
import { Formik } from "formik";
import * as yup from "yup";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
const shellLogo = require("../../../assets/logo.png");
const emailIcon = require("../../../assets/email-icon.png");
const passwordIcon = require("../../../assets/password-icon.png");
const bgImg = require("../../../assets/background-img.png");

const LoginScreen: FC = () => {
    const {navigate} = useNavigation();
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.mainContainer}>
        <Image source={shellLogo} style={styles.logo} />
        <Text style={styles.loginText}>Login</Text>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={()=>navigate('disclaimer')}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <View style={styles.textInputContainer}>
                <Image source={emailIcon} style={styles.emailIcon} />
                <TextInput
                  placeholder="johndoe@email.com"
                  placeholderTextColor="black"
                  style={styles.textInput}
                  onChangeText={handleChange("email")}
                  value={values.email}
                  onBlur={handleBlur("email")}
                />
                <Text style={styles.errorText}>
                  {errors.email && errors.email}
                </Text>
              </View>
              <View style={styles.passwordInputContainer}>
                <Image source={passwordIcon} style={styles.passwordIcon} />
                <TextInput
                  placeholder="*******"
                  placeholderTextColor="black"
                  style={styles.textInput}
                  secureTextEntry
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <Text style={styles.errorText}>
                  {errors.password && errors.password}
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  title="Login"
                  arrow={true}
                  style={styles.button}
                  disabled={!isValid && true}
                  onPress={() => handleSubmit()}
                />
              </View>
            </>
          )}
        </Formik>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <ImageBackground
          source={bgImg}
          style={styles.bgImageContainer}
          imageStyle={styles.bgImage}
          resizeMode="cover"
        />
      </View>
    </>
  );
};
export default LoginScreen;
