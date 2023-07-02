import TestContext from "@contexts/TestContext";

import { ResponseActivityModel } from "@remote/ListActivities/types";

import ActivityCard from './index';

import { render } from '@testing-library/react-native';
import { format } from 'date-fns';

describe(`ActivityCard`, () => {
  it(`render component`, () => {
    const activityProp: ResponseActivityModel = {
      id: 1,
      message: `This is a activity message`,
      date: new Date().toISOString(),
      user: {
        name: `Carlos Loureiro`,
        picture: `https://avatars.githubusercontent.com/u/19580424?v=4`,
      }
    };

    const component = render(
      <TestContext>
        <ActivityCard activity={activityProp}/>
      </TestContext>
    );

    const { getByText, getByTestId } = component;

    expect(getByText(activityProp.user.name)).toBeTruthy();
    expect(getByText(activityProp.message)).toBeTruthy();

    const formattedDate = format(new Date(activityProp.date), `EEE MMM dd yyyy HH:mm:ss`);
    expect(getByText(formattedDate)).toBeTruthy();

    const imageElement = getByTestId(`user-picture`);
    expect(imageElement.props.source).toEqual({
      uri: activityProp.user.picture,
    });
  });
});
