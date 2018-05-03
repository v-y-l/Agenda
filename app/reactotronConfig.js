import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
    .configure({name: "10x"})
    .use(reactotronRedux())
    .connect();