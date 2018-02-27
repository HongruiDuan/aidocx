import { createActions } from 'redux-actions';
import { identity } from 'ramda';

export const {
  entities: {
    getTemplates,
    gotTemplates,
    composeStart,
    composeEnd,
  },
} = createActions({
  ENTITIES: {
    GET_TEMPLATES: identity,
    GOT_TEMPLATES: identity,
    COMPOSE_START: (fileIds, tempId) => ({
      fileIds,
      tempId,
    }),
    COMPOSE_END: identity,
  },
});
