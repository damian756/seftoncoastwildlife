-- Daily page counts (Sefton Coast Wildlife, November 2026).
-- Additive only: creates one new table and touches nothing else. The old "PageView" table and its rows stay as they are.
-- Applied with: npx prisma db execute --file prisma/sql/2026-11-page-count.sql
CREATE TABLE IF NOT EXISTS "PageCount" ("path" TEXT NOT NULL, "day" DATE NOT NULL, "count" INTEGER NOT NULL DEFAULT 0, CONSTRAINT "PageCount_pkey" PRIMARY KEY ("path", "day"));
