export interface IProps {}
export interface IState {
  count: number;
  timer: number;
  name: string;
  x: number;
  y: number;
}

export interface IHookCounterFour {
  id: number;
  value: number;
}

export interface IHookCounterThree {
  firstName: string;
  lastName: string;
}

export interface ILogMousePosition {
  clientX: number;
  clientY: number;
}

export type PostType = {
  title: string;
  id: string;
};

export interface IStateReducer {
  loading: boolean;
  error: string;
  post: { [key: string]: string | number };
}

export interface IActionReducer {
  type: string;
  payload: { [key: string]: string };
}
