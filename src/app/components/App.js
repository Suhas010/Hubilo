import React from 'react';
import Test from '../containers/test-container';
require('../../scss/style.scss');
/**
 * root conmponent. Sorry for naming conventions.
 */
const App = () => (
    <div>    
        <Test />    
        Please visit <a href="https://www.suhasmore.in">My personal website</a>
        <br/> or my <a href="https://about.me/suhas-more">about.me</a> page for more details.
    </div>
);

export default App;
