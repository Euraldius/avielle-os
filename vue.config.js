module.exports = {
  // future Avi: if you remove your custom domain from GH pages, change the
  // production path of this ternary to `/avielle-os/`
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
};
