export const ClientRoutes = {
  auth: {
    base: () => "auth/",
    login: () => ClientRoutes.auth.base() + "login",
    register: () => ClientRoutes.auth.base() + "register",
  },
  dashboard: {
    base: () => "shows",
  }
}
