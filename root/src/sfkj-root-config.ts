import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@sfkj/mfe-react-navbar",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@sfkj/mfe-react-navbar"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
