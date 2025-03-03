export default {
  token: (state: { user: { token: unknown } }) => state.user.token,
  device: (state: { app: { device: unknown } }) => state.app.device
}
