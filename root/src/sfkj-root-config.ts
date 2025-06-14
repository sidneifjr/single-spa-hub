import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@sfkj/mfe-hello-world",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@sfkj/mfe-hello-world"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
