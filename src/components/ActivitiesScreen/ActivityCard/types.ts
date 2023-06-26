export interface ActivityCardProps {
  activity?: {
    id: number;
    message: string;
    date: Date;
    user: {
      name: string;
      picture: string;
    };
  };
}

export interface ActivityCardSkeletonProps {
  opacity?: number;
}