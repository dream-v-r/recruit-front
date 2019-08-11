export default async ({ app,store }) => {
  app.router.afterEach(() => {
    store.commit('hamburgerClose');
  });
};
