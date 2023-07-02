import { ReactElement } from "react";
import { Text } from "native-base";

import TestContext from "@contexts/TestContext";

import Card from './index';

import { render, waitFor } from '@testing-library/react-native';

const component = (children: ReactElement) => {
  return render(
    <TestContext>
      <Card>{ children }</Card>
    </TestContext>
  );
};

describe(`Card`, () => {
  it(`must render with text: Lorem ipsum dolor sit amet, consectetur adipiscing elit`, async () => {
    const { getByText } = component(<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>);

    await waitFor(() => {
      expect(getByText(`Lorem ipsum dolor sit amet, consectetur adipiscing elit`)).toBeTruthy();
    }, { timeout: 1000 });
  });

  it(`must render with text: Thank you for view my app code source. I hope it can be useful for you! Contact me for any suggestions 😊`, async () => {
    const { getByText } = component(<Text>Thank you for view my app code source. I hope it can be useful for you! Contact me for any suggestions 😊</Text>);

    await waitFor(() => {
      expect(getByText(`Thank you for view my app code source. I hope it can be useful for you! Contact me for any suggestions 😊`)).toBeTruthy();
    }, { timeout: 1000 });
  });
});
