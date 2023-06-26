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

  const loadActivitiesPage = async (remotePage: number) => {
    try {
      if (!user) return;

      const response = await ListActivitiesRequest(user.token, remotePage);

      if(response.length > 0) {
        setList([
          ...list,
          ...response.filter(loadedActivity => list.every(activity => loadedActivity.id !== activity.id))
        ]);
      }
    } catch (error: any) {
      addAlert({ status: `error`, message: error.message });
    } finally {
      setIsLoading(false);
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

  return (
    <BaseScreen enableScroll>
      { isLoading ? (
        <>
          <ActivityCardSkeleton/>
          <ActivityCardSkeleton opacity={0.75}/>
          <ActivityCardSkeleton opacity={0.50}/>
          <ActivityCardSkeleton opacity={0.25}/>
        </>
      ) : (
        list.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))
      )}
    </BaseScreen>
  );
}