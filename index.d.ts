/// <reference types="react" />
import { Provider } from "react-redux";
declare function connects(App: any): import("react-redux").ConnectedComponent<any, Pick<{}, never> | Pick<import("react").ClassAttributes<any>, "ref" | "key">>;
declare function creteStore(): import("redux").Store<import("redux").CombinedState<{
    HomeReducer: any;
}>, import("redux").AnyAction> & {
    dispatch: {};
};
export { connects, creteStore, Provider };
