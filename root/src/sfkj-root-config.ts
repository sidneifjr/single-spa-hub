import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@sfkj/mfe-react-navbar",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@sfkj/mfe-react-navbar"
    ),
  activeWhen: ["/"], // o app será exibido em todas as rotas.
});

registerApplication({
  name: "@sfkj/mfe-dashboard",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@sfkj/mfe-dashboard"
    ),
  activeWhen: ["/dashboard"],
});

start({
  urlRerouteOnly: true,
});
