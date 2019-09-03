import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { act } from "react-dom/test-utils";
import ShowcaseList from '../showcase_list';
import ShowcaseCard from '../showcase_card';


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders ShowcaseList component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowcaseList />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders ShowcaseCard component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowcaseCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders ShowcaseCard component with data", async () => {
  const testGallery = {
    name: "test name",
    species_name: "species name",
    image: "image_url"
  };

  await act(async () => {
    ReactDOM.render(<ShowcaseCard name={testGallery.name} species={testGallery.species_name} image={testGallery.image}/>, container);
  });

  expect(container.querySelector(".name").textContent).toBe(testGallery.name);
  expect(container.querySelector(".species-name").textContent).toBe(testGallery.species_name);

  const button = document.querySelector("button");
  expect(button.innerHTML).toBe("Show");

  await act(async () => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(button.innerHTML).toBe("Hide");
  expect(container.querySelector("img").src).toContain(testGallery.image);

});