import CollapseDynamicAreaComponent from "./components/CollapseDynamicArea";

export default {
  register(strapi) {},
  bootstrap(app) {
    app.injectContentManagerComponent("editView", "informations", {
      name: "collapse-dynamic-zone",
      Component: CollapseDynamicAreaComponent,
    });
  },
};
