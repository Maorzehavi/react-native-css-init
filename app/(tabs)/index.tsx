import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className={'flex-1 justify-between items-center'}>
      <Text className={'text-3xl text-primary font-bold'}>Welcome.</Text>
    </View>
  );
}
