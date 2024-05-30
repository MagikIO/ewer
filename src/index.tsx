/* @refresh reload */
import { Router, type RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";
import { render } from 'solid-js/web';
import Nav from './components/Nav';
import './index.css';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const routes = [{
  path: "/",
  component: lazy(() => import("./App")),
}] as Array<RouteDefinition>;

const Layout = (props: any) => {
  return (
    <div class="bg-secondary h-full">
      <Nav />
      <section>{props.children}</section>
    </div>
  );
}

render(() => (
  <Router root={Layout}>
    {routes}
  </Router>
), root!);
