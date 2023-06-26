import { ResponseActivityModel } from "@remote/ListActivities/types";

export interface ActivityCardProps {
  activity: ResponseActivityModel;
}

export interface ActivityCardSkeletonProps {
  opacity?: number;
}