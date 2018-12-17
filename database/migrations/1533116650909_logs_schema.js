const Schema = use('Schema');
const Database = use('Database');

class LogSchema extends Schema {
  async up() {
    await this.create('logs', (table) => {
      table.increments();
      table.timestamp('created_at').defaultTo(Database.fn.now());
      table.text('message');
      table.integer('status');
    });

  //  await this.raw('SELECT create_hypertable(\'logs\', \'created_at\');');
  }

  down() {
    this.drop('logs');
  }
}

module.exports = LogSchema;
