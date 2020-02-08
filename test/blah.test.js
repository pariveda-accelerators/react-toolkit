import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../src';
describe('it', function () {
    it('renders without crashing', function () {
        var div = document.createElement('div');
        ReactDOM.render(React.createElement(Thing, null), div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
//# sourceMappingURL=blah.test.js.map