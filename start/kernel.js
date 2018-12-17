const Server = use('Server');

const globalMiddleware = [
  'Adonis/Middleware/BodyParser',
  'Adonis/Middleware/AuthInit'
];

const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth',
  permissions: 'App/Middleware/Permissions'
};

const serverMiddleware = [
  'Adonis/Middleware/Static',
  'Adonis/Middleware/Cors'
];

Server
  .registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(serverMiddleware);
