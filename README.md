# Single-spa Hub

![Front-end-Single SPA](https://github.com/cicatriz-dev/home-hub/assets/16566846/4d2bcbb4-d356-4298-ae90-82f796a64b29)

Layout: https://www.figma.com/design/FXrKMz0gxIwN7rT8KOWqKG/HomeHub-%7C-Forma%C3%A7%C3%A3o-Micro-front-end?node-id=7684-21963

Orquestrador -> é o responsável por comunicar os projetos e compartilhar as informações corretas.

index.ejs -> é o arquivo mais importante do orquestrador. A partir do mesmo, realizamos o import de outros microfrontends e também definimos dependências comuns entre projetos.

# Lifecycles

- bootstrap: app é inicializado.

- mount: app é montado em tela.

- unmount: app é desmontado da tela.

Obs.: Migração para o Vite: https://medium.com/@kavinduvsomadasa/vite-and-react-configuration-in-single-spa-993b2c1a150e.

# Issues

https://github.com/single-spa/single-spa/issues/1297