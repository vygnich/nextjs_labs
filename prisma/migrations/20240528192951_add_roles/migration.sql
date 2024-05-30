-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'SELLER');

-- CreateEnum
CREATE TYPE "RoleStatus" AS ENUM ('APPROVED', 'REJECTED', 'INPROGRESS');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "roleStatus" "RoleStatus" NOT NULL DEFAULT 'APPROVED';
