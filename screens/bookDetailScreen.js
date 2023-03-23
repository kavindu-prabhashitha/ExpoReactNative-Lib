import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Modal,
} from "react-native";

import { colors } from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function BookDetailScreen () {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


  const sampleBook = {
    nameSinhala: "ලොවිනා",
    nameEnglish: "Lovina",
    price: "LKR 500.00",
    bookType: "Novel, Youth",
    author: "Mohan R Madawala",
    isbn: "1234-4657-8934",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when It is a long established fact that a reader will be distracted by the readable It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    publication: "BISO PUBLICATIONS",
  };

  // wait 5 seconds before loading the screen
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>
              <StatusBar
        barstyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
          <LinearGradient
            start={{ x: 0.0, y: 0.4 }}
            end={{ x: 0.1, y: 1.0 }}
            location={[0, 1]}
            colors={[colors.primary, colors.secondary, "white"]}
            style={{ flex: 1 }}
          >
            <SafeAreaView>
              <ScrollView
                style={{
                  height: "100%",
                }}
                refreshControl={<RefreshControl refreshing={refreshing} />}
              >
                <Modal visible={modalOpen} animationType="slide">
                  {/* <LinearGradient
                    start={{ x: 0.0, y: 0.4 }}
                    end={{ x: 0.1, y: 1.0 }}
                    location={[0, 1]}
                    colors={[colors.primary, colors.secondary, "white"]}
                    style={{ flex: 1 }}
                  > */}
                    <View style={styles.modalContent}>

                      <View style={styles.card}>
                      <MaterialIcons
                        style={{ ...styles.modalToggle, ...styles.modalClosed }}
                        name="close"
                        size={24}
                        onPress={() => {
                          setModalOpen(false);
                        }}
                      />
                        <View style={styles.cardContent}>
                          <Text style={styles.modalContentTitle}>Purchase Type</Text>
                          <Text>{sampleBook.description}</Text>
                          <TouchableOpacity>
                          <View style={styles.button}>
                          <Text style={styles.buttonText}>Printed Book</Text>
                        </View>
                          </TouchableOpacity>
                          <TouchableOpacity>
                          <View style={styles.button}>
                          <Text style={styles.buttonText}>Ebook</Text>
                        </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  {/* </LinearGradient> */}
                </Modal>

                <View style={styles.container}>
                  <View style={styles.topContainer}>
                    <View style={{ flex: 1, padding: 10 }}>
                      <Text style={styles.bookTitle}>
                        {sampleBook.nameSinhala}
                      </Text>
                      <Text style={styles.bookTitleEnglish}>
                        {sampleBook.nameEnglish}
                      </Text>
                      <Text style={styles.authorName}>{sampleBook.author}</Text>
                      <Text>ISBN : {sampleBook.isbn}</Text>

                      <View style={styles.ratingContainer}>
                        <Image
                          style={styles.ratingStarIcon}
                          source={require("../assets/images/icons/star.png")}
                        />
                        <Image
                          style={styles.ratingStarIcon}
                          source={require("../assets/images/icons/star.png")}
                        />
                        <Image
                          style={styles.ratingStarIcon}
                          source={require("../assets/images/icons/star.png")}
                        />
                      </View>
                      <Text
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                        style={styles.publicationBadge}
                      >
                        {sampleBook.publication}
                      </Text>
                    </View>
                    <View>
                      <Image
                        source={require("../assets/images/books/book1.png")}
                        resizeMode="cover"
                        style={{
                          width: 180,
                          height: 275,
                          borderRadius: 20,
                        }}
                      />
                      <Text style={styles.bookType}>{sampleBook.bookType}</Text>
                    </View>
                  </View>

                  <View style={styles.middleContainer}>
                    <View style={{ flex: 1, padding: 10 }}>
                      <Text style={{ textDecorationLine: "line-through" }}>
                        {sampleBook.price}
                      </Text>
                      <Text style={styles.bookPrice}>{sampleBook.price}</Text>
                      <TouchableOpacity onPress={() => setModalOpen(true)}>
                        <View style={styles.button}>
                          <Text style={styles.buttonText}>ADD TO CART</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.middleContainer}>
                    <View style={{ flex: 1, padding: 10 }}>
                      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        Description
                      </Text>
                      <Text>{sampleBook.description}</Text>
                      <TouchableOpacity>
                        <View style={styles.sampleReadButton}>
                          <Text style={styles.sampleReadButtonText}>
                            SAMPLE READ
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </SafeAreaView>
          </LinearGradient>
  
    
    </View>
  );
};

export default BookDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },

  searchInputMainContainer: {
    marginTop: 8,
    marginLeft: windowWidth / 15,
    height: 44,
  },
  searchInputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 8,
    borderRadius: 13,
    height: 50,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "WorkSans-SemiBold",
    color: "dodgerblue",
  },
  topContainer: {
    flexDirection: "row",
  },
  middleContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  bookTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
  bookTitleEnglish: {
    fontSize: 24,
    fontWeight: "normal",
  },
  authorName: {
    fontSize: 16,
    marginTop: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  ratingStarIcon: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  publicationBadge: {
    fontSize: 12,
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    textAlignVertical: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    alignSelf: "flex-start",
  },
  bookType: {
    marginTop: 5,
    padding: 2,
  },
  bookPrice: {
    fontWeight: "bold",
    fontSize: 23,
  },
  button: {
    marginTop: 10,
    elevation: 12,
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 40,
    backgroundColor: "#8EA7E9",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
  sampleReadButton: {
    alignSelf: "flex-start",
    marginTop: 10,
    elevation: 12,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 40,
    backgroundColor: "#8EA7E9",
  },
  sampleReadButtonText: {
    fontStyle: "normal",
  },
  modalContent: {
    flex: 1,
    alignSelf:'center',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor: colors.secondary
    
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClosed: {
    marginTop: 20,
    marginBottom: 0,
  },
  card: {
    borderRadius: 18,
    elevation: 12,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin:10
  },
  cardContent: {
    margin:20
  },
  modalContentTitle:{
    fontSize:16,
    marginBottom:5,
    fontWeight:'bold'
  }
});


// NavigationDrawer Used
// Need to update babel.config.js
