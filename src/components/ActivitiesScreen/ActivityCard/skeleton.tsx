import { Center, HStack, Skeleton, VStack } from "native-base";

import { ActivityCardSkeletonProps } from "./types";
import { skeletonStyles } from "./styles";

export default function ActivityCardSkeleton ({ opacity = 1 }: ActivityCardSkeletonProps) {
  return (
    <Center w="100%" opacity={opacity}>
      <HStack {...skeletonStyles.cardStack}>
        <Skeleton {...skeletonStyles.picture} />
        <VStack {...skeletonStyles.descriptionStack}>
          <Skeleton {...skeletonStyles.name} />
          <Skeleton.Text {...skeletonStyles.description} />
          <HStack {...skeletonStyles.timeStack}>
            <Skeleton {...skeletonStyles.timeIcon}/>
            <Skeleton {...skeletonStyles.timeText} />
          </HStack>
        </VStack>
      </HStack>
    </Center>
  );
}