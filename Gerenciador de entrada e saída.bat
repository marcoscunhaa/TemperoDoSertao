@echo off
echo Iniciando Docker Desktop...

:: inicia o docker desktop (se ainda não estiver aberto)
start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"

echo Aguardando o Docker iniciar...
:waitDocker
docker info >nul 2>&1
if %errorlevel% neq 0 (
    timeout /t 2 >nul
    goto waitDocker
)

echo Docker iniciado com sucesso!

echo Subindo containers...
docker-compose up --build -d

echo Aguardando o Spring Boot iniciar...
timeout /t 10 /nobreak

start http://localhost:8080

pause
