import React from 'react';
import App from '../App';

import { render } from '@testing-library/react';

test("renders correctly", () => { 
   const {container} = render(<App/>);
   expect(container.innerHTML).toMatchSnapshot();
});

