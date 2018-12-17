const Route = use('Route');
const astria = use('astria');

Route.get('/', () => ({ greeting: 'Hello world' }));

astria();
