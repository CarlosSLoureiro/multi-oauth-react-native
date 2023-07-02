import TestContext from "@contexts/TestContext";

import { ResponseActivityModel } from "@remote/ListActivities/types";

import ActivityCard from './index';

import { ActivityCardProps } from "./types";

import { render } from '@testing-library/react-native';
import { format } from 'date-fns';

const component = (props: ActivityCardProps) => {
  return render(
    <TestContext>
      <ActivityCard {...props}/>
    </TestContext>
  );
};

describe(`ActivityCard`, () => {
  const activityProp: ResponseActivityModel = {
    id: 1,
    message: `This is a activity message`,
    date: new Date().toISOString(),
    user: {
      name: `Carlos Loureiro`,
      picture: `https://avatars.githubusercontent.com/u/19580424?v=4`,
    }
  };

  it(`must render user name and activity message`, () => {
    const { getByText } = component({activity: activityProp});

    expect(getByText(activityProp.user.name)).toBeTruthy();
    expect(getByText(activityProp.message)).toBeTruthy();
  });

  it(`must render user name and activity message`, () => {
    const { getByText } = component({activity: activityProp});

    const formattedDate = format(new Date(activityProp.date), `EEE MMM dd yyyy HH:mm:ss`);
    expect(getByText(formattedDate)).toBeTruthy();
  });

  it(`must render user name and activity message`, () => {
    const { getByTestId } = component({activity: activityProp});

    const imageElement = getByTestId(`user-picture`);
    expect(imageElement.props.source).toEqual({
      uri: activityProp.user.picture,
    });
  });
});
