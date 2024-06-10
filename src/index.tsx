/* @refresh reload */
import { Router, type RouteDefinition } from "@solidjs/router";
import { lazy, type Component, type JSXElement } from "solid-js";
import { render } from 'solid-js/web';
import Nav from './components/Nav';
import './index.css';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const routes = [
  {
    path: "/",
    component: lazy(() => import("./home"))
  },
  {
    path: "/prompt",
    component: lazy(() => import("./prompt"))
  },
  {
    path: "/env",
    component: lazy(() => import("./env"))
  },
  {
    path: "/familiar",
    component: lazy(() => import("./familiar"))
  }
] as Array<RouteDefinition>;

const Layout: Component<{ children?: JSXElement }> = (props) => {
  return (
    <div class="bg-secondary h-full">
      <Nav />
      {props.children}
    </div>
  );
}

render(() => (
  <Router root={Layout}>
    {routes}
  </Router>
), root!);
