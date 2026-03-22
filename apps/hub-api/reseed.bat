@echo off
cd /d "%~dp0"
npx ts-node prisma/seed.ts
pause
