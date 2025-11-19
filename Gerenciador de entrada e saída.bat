@echo off
echo Subindo o Docker...
docker-compose up --build -d

:: Espera alguns segundos para o Spring Boot iniciar
timeout /t 10 /nobreak

:: Abre o navegador
start http://localhost:8080

pause
