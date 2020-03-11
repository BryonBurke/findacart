
// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  cart: {
    backgroundColor: 'yellow',
    height: 70,
    width: 70,
    margin: 2,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 7,
  },

  btn: {
    fontFamily: 'Roboto',
  },


  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

});

function HomeScreen({ route, navigation }) {
  /* 2. Get the param */



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

     

      <View>
        <MapView style={styles.mapStyle}
          initialRegion={{
            latitude: 45.521118,
            longitude: -122.676129,
            latitudeDelta: .001,
            longitudeDelta: .001,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: 45.521118,
              longitude: -122.676129
            }}
            title={"title"}
            description={"description"}
            onPress={() => {
              /* 1. Navigate to the Pod route with params */
              navigation.navigate('Pod', {
                cartId: 25,
              });
            }}
          />
        </MapView>
      </View>


      <View>
        <Button
          title="Pod"
          onPress={() => {
            /* 1. Navigate to the Pod route with params */
            navigation.navigate('Pod', {
              cartId: 25,
            });
          }}
        />
      </View>
    </View>


  );
}



function PodScreen({ route, navigation }) {
  return (
    <View style={{ backgroundColor: 'gray', flex: 1, justifyContent: 'center' }}>
      <ScrollView>

        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button style={styles.btn}
              title="Gyro"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 4,
                });
              }}
            />
          </View>
          <View style={styles.cart}>
            <Button
              title="Eggs"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 3,
                });
              }}
            />
          </View>
          <View style={styles.cart}>
            <Button
              title=""
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: '',
                });
              }}
            />
          </View>
          <View style={styles.cart}>
            <Button
              title="cart4"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 2,
                });
              }}
            />
          </View>
          <View style={styles.cart}>
            <Button
              title="cart5"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 1,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="KTaco"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 6,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="kBAP"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 7,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="Mexi"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 8,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="Mexi"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 9,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="Soup"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 10,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="Thai"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 11,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="Aloha"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 12,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="Noah"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 13,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="Thai"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 14,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="Iraqi"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 15,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="Mexi"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 16,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="Babylon"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 17,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="BBQ"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 18,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="Thai"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 19,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="Philly"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 20,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.cart}>
            <Button
              title="India"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 21,
                });
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>





          <View style={styles.cart}>
            <Button
              title="Egypt"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 22,
                });
              }}
            />
          </View>
          <View style={styles.cart}>
            <Button
              title="Panda"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 23,
                });
              }}
            />
          </View>
          <View style={styles.cart}>
            <Button
              title=""
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 24,
                });
              }}
            />
          </View>
          <View style={styles.cart}>
            <Button
              title="Heng"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 24,
                });
              }}
            />
          </View>
          <View style={styles.cart}>
            <Button
              title=""
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  cartId: 25,
                });
              }}
            />
          </View>
        </View>

      </ScrollView>
    </View>
  );
}








function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */

  let { cartId } = route.params;
  console.log(cartId);
  let imagePath;
  if (cartId === 1) {
    imagePath = require("./assets/images/cartpic1.jpeg");
  }
  else if (cartId === 2) {
    imagePath = require("./assets/images/cartpic2.jpeg");
  }
  else if (cartId === 3) {
    imagePath = require("./assets/images/cartpic3.jpeg");
  }
  else if (cartId === 4) {
    imagePath = require("./assets/images/cartpic4.jpeg");
  }
  else if (cartId === 5) {
    imagePath = require("./assets/images/cartpic5.jpeg");
  }
  else if (cartId === 6) {
    imagePath = require("./assets/images/cartpic6.jpeg");
  }
  else if (cartId === 7) {
    imagePath = require("./assets/images/cartpic7.jpeg");
  }
  else if (cartId === 8) {
    imagePath = require("./assets/images/cartpic8.jpeg");
  }
  else if (cartId === 9) {
    imagePath = require("./assets/images/cartpic9.jpeg");
  }
  else if (cartId === 10) {
    imagePath = require("./assets/images/cartpic10.jpeg");
  }
  else if (cartId === 11) {
    imagePath = require("./assets/images/cartpic11.jpeg");
  }
  else if (cartId === 12) {
    imagePath = require("./assets/images/cartpic12.jpeg");
  }
  else if (cartId === 13) {
    imagePath = require("./assets/images/cartpic13.jpeg");
  }
  else if (cartId === 14) {
    imagePath = require("./assets/images/cartpic14.jpeg");
  }
  else if (cartId === 15) {
    imagePath = require("./assets/images/cartpic15.jpeg");
  }
  else if (cartId === 16) {
    imagePath = require("./assets/images/cartpic16.jpeg");
  }
  else if (cartId === 17) {
    imagePath = require("./assets/images/cartpic17.jpeg");
  }
  else if (cartId === 18) {
    imagePath = require("./assets/images/cartpic18.jpeg");
  }
  else if (cartId === 19) {
    imagePath = require("./assets/images/cartpic19.jpeg");
  }
  else if (cartId === 20) {
    imagePath = require("./assets/images/cartpic20.jpeg");
  }
  else if (cartId === 21) {
    imagePath = require("./assets/images/cartpic21.jpeg");
  }
  else if (cartId === 22) {
    imagePath = require("./assets/images/cartpic22.jpeg");
  }
  else if (cartId === 23) {
    imagePath = require("./assets/images/cartpic23.jpeg");
  }
  else if (cartId === 24) {
    imagePath = require("./assets/images/cartpic24.jpeg");
  }



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View>

        <Image
          style={{
            height: 600,
            width: 450
          }}
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
        <Stack.Screen name="Pod" component={PodScreen} />

        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
