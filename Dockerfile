FROM maven:3.9.5-eclipse-temurin-17 AS builder
WORKDIR /site
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
WORKDIR /site
COPY --from=builder /site/target/*.jar site.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "site.jar"]