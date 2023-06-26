import { useContext } from "react";
import { Button, View } from "react-native";
import { Center, HStack, Skeleton,Text, VStack } from "native-base";

import AppContext from "@contexts/AppContext";

import ActivityCard from "@components/ActivitiesScreen/ActivityCard";
import ActivityCardSkeleton from "@components/ActivitiesScreen/ActivityCard/skeleton";
import BaseScreen from "@components/BaseScreen";

export default function GenericActivitiesScreen() {
  const { setScreen } = useContext(AppContext);

  const navigateToAccount = () => {
    setScreen(`Account`);
  };

  return (
    <BaseScreen enableScroll>
      <Text>Activities Screen</Text>
      <Button title="Go to Account" onPress={navigateToAccount} />
      <ActivityCard/>
      <ActivityCardSkeleton/>
      <ActivityCardSkeleton/>
      <ActivityCardSkeleton/>
      <ActivityCardSkeleton/>
      <ActivityCardSkeleton/>
      <ActivityCardSkeleton/>
    </BaseScreen>
  );
}