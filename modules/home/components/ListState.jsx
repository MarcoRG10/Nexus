import React, { useState } from "react";
import {
  FlatList,
  Modal,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import State from "./State";
import Icon from "react-native-vector-icons/FontAwesome";
export default function ListStates() {
  const [estados] = useState([
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStihKLR4QsliwDXi8x2pJx20dW0zfRKVAiaA&s",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElbaePMJA_KW3V1R32-_UqA4YxC6TuYpxlg&s",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBioLvC31VJfcfkE4hfU05iLTNfE5o6oFKgA&s",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleStatePress = (index) => {
    setCurrentIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const goNext = () => {
    if (currentIndex < estados.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      closeModal();
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View>
      <FlatList
        data={estados}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <State image={item.image} onPress={() => handleStatePress(index)} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ position: "absolute", top: 40, right: 20, zIndex: 1 }} 
            onPress={closeModal}
          >
            <Icon name="times" size={30} color="white" />
          </TouchableOpacity>

          <View style={{ flex: 1, width: "100%" }}> 
            <Image
              source={{ uri: estados[currentIndex].image }}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </View>

          {currentIndex > 0 && (
            <TouchableOpacity
              style={{ position: "absolute", left: 20, top: "50%" }}
              onPress={goPrev}
            >
              <Icon name="chevron-left" size={40} color="white" />{" "}
            </TouchableOpacity>
          )}

          {currentIndex < estados.length - 1 && (
            <TouchableOpacity
              style={{ position: "absolute", right: 20, top: "50%" }}
              onPress={goNext}
            >
              <Icon name="chevron-right" size={40} color="white" />{" "}
            </TouchableOpacity>
          )}
        </View>
      </Modal>
    </View>
  );
}
