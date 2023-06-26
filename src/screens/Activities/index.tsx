import { useContext, useEffect, useState } from "react";

import AppContext from "@contexts/AppContext";

import ActivityCard from "@components/ActivitiesScreen/ActivityCard";
import ActivityCardSkeleton from "@components/ActivitiesScreen/ActivityCard/skeleton";
import BaseScreen from "@components/BaseScreen";

import ListActivitiesRequest from "@remote/ListActivities";
import { ResponseActivityModel } from "@remote/ListActivities/types";

export default function ActivitiesScreen() {
  const { user, addAlert, currentScreen } = useContext(AppContext);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ page, setPage ] = useState<number>();
  const [ list, setList ] = useState<Array<ResponseActivityModel>>([]);
  const [ isFullList, setIsFullList ] = useState(false);

  const loadActivitiesPage = async (remotePage: number) => {
    try {
      if (!user) return;

      setIsLoading(true);

      const response = await ListActivitiesRequest(user.token, remotePage);

      if (!response.error) {
        if(response.length > 0) {
          setList([
            ...list,
            ...response.filter(loadedActivity => list.every(activity => loadedActivity.id !== activity.id))
          ]);
        } else {
          setIsFullList(true);
        }
      }  else {
        addAlert({ status: `error`, message: response.message ? `${response.error}: ${response?.message}` : response.error }, 5000);
      }
    } catch (error: any) {
      addAlert({ status: `error`, message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const onScrollToEnd = () => {
    if (!isFullList && !isLoading && page !== undefined) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (page !== undefined) {
      void loadActivitiesPage(page);
    }
  }, [page]);

  useEffect(() => {
    if (currentScreen.name === `Activities`) {
      setPage(0);
    } else {
      setPage(undefined);
      setList([]);
    }
  }, [currentScreen]);

  const renderList = () => {
    if (isLoading && list.length <= 0) {
      return (
        <>
          <ActivityCardSkeleton/>
          <ActivityCardSkeleton opacity={0.75}/>
          <ActivityCardSkeleton opacity={0.50}/>
          <ActivityCardSkeleton opacity={0.25}/>
        </>
      );
    } else {
      const activityCards = list.map(activity => (
        <ActivityCard key={activity.id} activity={activity} />
      ));
      if (isLoading) {
        return [
          ...activityCards,
          ...[
            <ActivityCardSkeleton key="skeleton-1" />,
            <ActivityCardSkeleton key="skeleton-2" opacity={0.50}/>
          ]
        ];
      } else {
        return activityCards;
      }
    }
  };
  return (
    <BaseScreen enableScroll onScrollToEnd={onScrollToEnd}>
      { renderList() }
    </BaseScreen>
  );
}