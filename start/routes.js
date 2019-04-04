const Route = use('Route');
const astria = use('adonis-astria');

Route.get('/', () => ({ greeting: 'Hello world' }));

astria();
