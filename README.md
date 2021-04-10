# Redux React Simple
## _Simple Configuration Redux_

[![N|Solid](https://reactjsexample.com/assets/favicon.png)](https://reactjs.org/)


# Setup Redux
```sh
yarn add simple-redux-ts
```
# Then
- Add file to root/src project 
- ``` src/state.json ```
Example :
```
{
    "value": 6
}
```

# Example:
Add script to head ``` index.ts/js ```
```
...
...
import { creteStore, Provider } from 'simple-redux-ts';
...
ReactDOM.render(
    <Provider store={creteStore()}>
        <App />
    </Provider>
, document.getElementById('root'));
```

# Other Component
Use ```this.props.updateState({ ... })```
Access ```value``` with ```this.props.value```
```
import React, { Component } from 'react';
import { connects } from 'simple-redux-ts';
...
...
class App extends Component {
    ...
    ...
    render() {
        return (
            ...
            ...
            <button onClick={() => {
                this.props.updateState({
                    value: this.props.value - 1
                });
            }}>Min</button>
            
            <div>{this.props.value}</div>
            
            <button onClick={() => {
                this.props.updateState({
                    value: this.props.value + 1
                });
            }}>Plus</button>
            ...
            ...
        );
    }
    ...
    ...
}
export default connects(App);
```


## Features

- One Function for update all props
- Use ``` props.updateState({ ... }) ```



