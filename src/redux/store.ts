import { configureStore } from '@reduxjs/toolkit'
import userFilterReducer from './features/user-filter/userFilterSlice'
import integrationFilterReducer from './features/integration-filter/integrationFilterSlice'
import uiStateReducer from './features/ui-state/uiStateSlice'

export const store = configureStore({
  reducer: {
    userFilter: userFilterReducer,
    integrationFilter: integrationFilterReducer,
    uiState: uiStateReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch