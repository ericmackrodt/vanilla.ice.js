import * as React from 'react';
const gif = require<any>('./netscap4.gif');
// require<any>('./styles.css');

export class NetscapeNow extends React.Component {
    render() {
        return (<img src={gif} />);
    }
}