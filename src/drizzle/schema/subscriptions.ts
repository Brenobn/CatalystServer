import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  enail: text('email').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})
