// @flow

export type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  trailer: string,
  poster: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

// for internal use
  declare type ActionType = "SET_SEARCH_TERM";

  // generic
  declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

export type Action = ActionT<"SET_SEARCH_TERM", string>;
