import { init } from '@rematch/core';
import { getPersistor } from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import selectorsPlugin from '@rematch/select';

import { model as session } from '../models/session';

export const store = init({
  models: {
    session,
  },
  plugins: [
    selectorsPlugin(),
    createLoadingPlugin(),
    createRematchPersist({
      whiteList: ['session'],
      version: 1,
    }),
  ],
});

export const persistor = getPersistor();

export const { getState, dispatch } = store;
