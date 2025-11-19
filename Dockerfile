# Etapa 1: Build do JAR com Maven
FROM maven:3.9.3-eclipse-temurin-17 AS build

WORKDIR /app

# Copia pom.xml e src
COPY pom.xml .
COPY src ./src

# Build do JAR sem testes
RUN mvn clean package -DskipTests

# Etapa 2: Container leve para rodar o JAR
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copia JAR da etapa de build
COPY --from=build /app/target/TemperoDoSertao-0.0.1-SNAPSHOT.jar app.jar

# Expõe a porta 8080
EXPOSE 8080

# Comando de execução
ENTRYPOINT ["java", "-jar", "app.jar"]
