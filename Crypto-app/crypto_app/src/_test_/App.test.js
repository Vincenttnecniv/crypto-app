import {render} from '@testing-library/react';
import App from '../App';
import {BrowserRouter as Router} from 'react-router-dom';
import React from "react";
import renderer from "react-test-renderer";

describe("Testing client or App component", () => { //Client side testing

test('renders app component', async () => { //Unit testing app
  render(
    <Router>
      <App />
    </Router>,
  );
});

  it("App matches DOM Snapshot", () => { //Snapshot testing app
    const tree = renderer.create(
      <Router>
      <App />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});