# --- Stage 1: Build ---
# Use an official Maven image to build the app
FROM maven:3.8.5-openjdk-17 AS builder
WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the rest of the source code
COPY src ./src

# Build the application
RUN mvn clean install -DskipTests


# --- Stage 2: Run ---
# Use a lightweight Java 17 image
FROM openjdk:17-slim
WORKDIR /app

# Copy the built JAR file from the 'builder' stage
# Make sure this JAR file name is correct!
COPY --from=builder /app/target/chat-app-backend-0.0.1-SNAPSHOT.jar ./app.jar

# Expose the port your Spring app runs on
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]