/// <reference types="react" />
declare function connects(defaultState: any, App: any): import("react-redux").ConnectedComponent<any, Pick<{}, never> | Pick<import("react").ClassAttributes<any>, "ref" | "key">>;
declare function creteStore(defaultState: any, App: any): JSX.Element;
export { connects, creteStore };
