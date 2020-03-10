
// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="cart1"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 1, 
          });
        }}
      />
      <Button
        title="cart2"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 2, 
          });
        }}
      />
      <Button
        title="cart3"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 3, 
          });
        }}
      />
      <Button
        title="cart4"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 4, 
          });
        }}
      />
      <Button
        title="cart5"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 5, 
          });
        }}
      />
      <Button
        title="cart6"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 6, 
          });
        }}
      />
      <Button
        title="cart7"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 7, 
          });
        }}
      />
      <Button
        title="cart8"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 8, 
          });
        }}
      />
      <Button
        title="cart9"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 9, 
          });
        }}
      />
      <Button
        title="cart10"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 10, 
          });
        }}
      />
      <Button
        title="cart11"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 11, 
          });
        }}
      />
      <Button
        title="cart12"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 12, 
          });
        }}
      />
      <Button
        title="cart13"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 13, 
          });
        }}
      />
      <Button
        title="cart14"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 14, 
          });
        }}
      />
      <Button
        title="cart15"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 15, 
          });
        }}
      />
      <Button
        title="cart16"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 16, 
          });
        }}
      />
      <Button
        title="cart17"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 17, 
          });
        }}
      />
      <Button
        title="cart18"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 18, 
          });
        }}
      />
      <Button
        title="cart19"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 19, 
          });
        }}
      />
      <Button
        title="cart20"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 20, 
          });
        }}
      />
      <Button
        title="cart21"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 21, 
          });
        }}
      />
      <Button
        title="cart22"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 22, 
          });
        }}
      />
      <Button
        title="cart23"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 23, 
          });
        }}
      />
      <Button
        title="cart24"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            cartId: 24, 
          });
        }}
      />



    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
 let { cartId } = route.params;
 console.log(cartId);
  let imagePath; 
  if (cartId === 1){
    imagePath = require("./assets/images/cartpic1.jpeg");
  }
  else if (cartId === 2) {
    imagePath = require("./assets/images/cartpic2.jpeg");
  }
  else if (cartId === 3){
    imagePath = require("./assets/images/cartpic3.jpeg");
  }
  else if (cartId === 4){
    imagePath = require("./assets/images/cartpic4.jpeg");
  }
  else if (cartId === 5){
    imagePath = require("./assets/images/cartpic5.jpeg");
  }
  else if (cartId === 6){
    imagePath = require("./assets/images/cartpic6.jpeg");
  }
  else if (cartId === 7){
    imagePath = require("./assets/images/cartpic7.jpeg");
  }
  else if (cartId === 8){
    imagePath = require("./assets/images/cartpic8.jpeg");
  }
  else if (cartId === 9){
    imagePath = require("./assets/images/cartpic9.jpeg");
  }
  else if (cartId === 10){
    imagePath = require("./assets/images/cartpic10.jpeg");
  }
  else if (cartId === 11){
    imagePath = require("./assets/images/cartpic11.jpeg");
  }
  else if (cartId === 12){
    imagePath = require("./assets/images/cartpic12.jpeg");
  }
  else if (cartId === 13){
    imagePath = require("./assets/images/cartpic13.jpeg");
  }
  else if (cartId === 14){
    imagePath = require("./assets/images/cartpic14.jpeg");
  }
  else if (cartId === 15){
    imagePath = require("./assets/images/cartpic15.jpeg");
  }
  else if (cartId === 16){
    imagePath = require("./assets/images/cartpic16.jpeg");
  }
  else if (cartId === 17){
    imagePath = require("./assets/images/cartpic17.jpeg");
  }
  else if (cartId === 18){
    imagePath = require("./assets/images/cartpic18.jpeg");
  }
  else if (cartId === 19){
    imagePath = require("./assets/images/cartpic19.jpeg");
  }
  else if (cartId === 20){
    imagePath = require("./assets/images/cartpic20.jpeg");
  }
  else if (cartId === 21){
    imagePath = require("./assets/images/cartpic21.jpeg");
  }
  else if (cartId === 22){
    imagePath = require("./assets/images/cartpic22.jpeg");
  }
  else if (cartId === 23){
    imagePath = require("./assets/images/cartpic23.jpeg");
  }
  else if (cartId === 24){
    imagePath = require("./assets/images/cartpic24.jpeg");
  }

 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
      <View>
        
        <Image
          style={{
            height: 600,
            width: 450  }}
          source={imagePath}
        />
      </View>

    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
