import { init } from '@rematch/core';
import { getPersistor } from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import selectPlugin, { getSelect } from '@rematch/select';

import * as models from '../models'

export { models }
export type models = typeof models

export const store = init({
  models,
  plugins: [
    selectPlugin(),
    createLoadingPlugin(),
    createRematchPersist({
      whiteList: ['session'],
      version: 1,
    }),
  ],
});

export const persistor = getPersistor();

export const select = getSelect<models>()

export const { getState, dispatch } = store;
