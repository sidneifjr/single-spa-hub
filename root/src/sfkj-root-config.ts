import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@sfkj/mfe-hello-world",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@sfkj/mfe-hello-world"
    ),
  activeWhen: ["/hello-world"],
});

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
