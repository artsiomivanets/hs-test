FROM clojure:latest as builder
COPY . /app
WORKDIR /app
RUN clojure -A:build-prod
RUN clojure -X:depstar uberjar :jar app.jar

FROM openjdk:11
WORKDIR /app
COPY --from=builder /app/app.jar ./app.jar
CMD ["java", "-jar", "app.jar", "-m", "hs.system"]