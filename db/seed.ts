import { db } from './index';
import { usersTable } from './schema';

async function seed() {
  await db.insert(usersTable).values([
    {
      first_name: 'alan',
      last_name: 'medina',
      email: 'alanmedina@example.com',
    },
  ]);

  console.log('Data seeded successfully');
}

seed().catch((err) => {
  console.error('Failed to seed data:', err);
});
