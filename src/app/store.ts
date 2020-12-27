import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { ThunkAction } from "redux-thunk";
import { createLogger } from "redux-logger";
import { createBrowserHistory, History } from "history";
import createRootReducer, { RootState } from "./rootReducer";

const getMiddlewares = (history: History) => {
  const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];
  const excludeLoggerEnvs = ["test", "production"];
  const shouldIncludeLogger = !excludeLoggerEnvs.includes(
    process.env.NODE_ENV || ""
  );

  if (shouldIncludeLogger) {
    const logger = createLogger({
      level: "info",
      collapsed: true,
    });
    middleware.push(logger);
  }

  return middleware;
};

export const configuredStore = (history: History, initialState?: RootState) => {
  const store = configureStore({
    reducer: createRootReducer(history),
    middleware: getMiddlewares(history),
    preloadedState: initialState,
  });

  if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept(
      "./rootReducer",
      // eslint-disable-next-line
      () => store.replaceReducer(require("./rootReducer").default)
    );
  }

  return store;
};

export type Store = ReturnType<typeof configuredStore>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
