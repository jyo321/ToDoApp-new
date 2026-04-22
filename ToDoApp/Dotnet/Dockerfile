FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
WORKDIR /app

# # Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# # Copy everything else and build
COPY . .
RUN dotnet publish -c Release -o out

# # Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "ToDOList.dll"]

#dotnet publish --configuration Release
#docker build -t todoapiv1 --build-arg BUILD_ID_ARG=2.0.0 .
#docker run -p 5000:80 -d --name todpapiv1 <>

# publish in local, only copy to run
#FROM mcr.microsoft.com/dotnet/aspnet:5.0
#ARG BUILD_ID_ARG=1.0.1
#COPY /bin/Release/net5.0/publish/ App/
#WORKDIR /App
#RUN echo "Build Id as arg --> $BUILD_ID_ARG -->"
#ENV BUILD_ID=${BUILD_ID_ARG}
#ENTRYPOINT ["dotnet", "ToDOList.dll"]


