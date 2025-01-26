import { useState } from "react";
import { ScrollView, View, Image } from "react-native";
import { Icon, Searchbar, IconButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
export default function HeaderHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [onPress, setOnPress] = useState(false);
  const content = onPress ? (
    <Searchbar
      style={{ width: 230, height: 40, borderRadius: 30, marginTop: 12 }}
      onChangeText={() => setSearchQuery(searchQuery)}
      value={searchQuery}
      onBlur={() => setOnPress(false)}
    />
  ) : (
    <IconButton
      icon={({ size, color }) => (
        <FontAwesome name="search" size={size} color={color} />
      )}
      size={30}
      color="white"
      onPress={() => setOnPress(true)}
      style={{ marginLeft: 150 }}
    />
  );

  return (
    <View style={{ flex: 1, flexDirection: "row", padding: 30, marginTop: 12 }}> 
      <View style={{ flex: 1, flexDirection: "column", marginRight: 55 }}>
        <Image
          source={require("../../../assets/Nexus_logo_transparent.png")}
          style={{ width: 100, height: 80 }}
        />
      </View>
      <View style={{ marginRight: 10 }}>{content}</View>
      <View style={{ flex: 1, flexDirection: "column", marginTop: 12 }}>
        <Icon
          source={({ size, color }) => (
            <FontAwesome name="bell" size={size} color={color} />
          )}
          size={30}
          color="white"
        />
      </View>
    </View>
  );
}
