PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS `friendships` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`friend_id` integer NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`friend_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO friendships VALUES(1,1,2,'2024-09-18 23:18:23',NULL);
INSERT INTO friendships VALUES(2,2,1,'2024-09-18 23:18:34',NULL);
INSERT INTO friendships VALUES(3,1,3,'2024-09-19 03:40:07',NULL);
INSERT INTO friendships VALUES(4,3,1,'2024-09-19 03:40:25',NULL);
CREATE TABLE IF NOT EXISTS `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`user_id` integer NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer, `image` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO posts VALUES(1,'A checklist and guide to get your repository collaboration-ready#github#collaboration ready','The settings of your repository lay the foundation for collaboration. They determine who can see and contribute to your project, how contributions are reviewed, and what happens to those contributions once they are submitted. Properly used, they can foster an environment in which contributors across the globe will find, make use of, and help build your project. In a corporate setting, they help shift developers from a siloed way of thinking and building to a “search-first, collaborate-first” mindset. This practice, known as innersourcing, reduces redundant work and accelerates the whole company.',2,'2024-09-19 00:13:55',NULL,'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flz73heq3j3y8szbys4op.png');
CREATE TABLE IF NOT EXISTS `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL
);
INSERT INTO users VALUES(1,'alan','medina','alanmedinatest.com');
INSERT INTO users VALUES(2,'eduardo','silva','eduardo1@test.com');
INSERT INTO users VALUES(3,'user','demo1','userdemo1@test.com');
INSERT INTO users VALUES(4,'user ','demo 2','userdemo2@test.com');
INSERT INTO users VALUES(5,'user','demo 3','userdemo3@test.com');
CREATE TABLE IF NOT EXISTS "__drizzle_migrations" (
			id SERIAL PRIMARY KEY,
			hash text NOT NULL,
			created_at numeric
		);
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);
COMMIT;
