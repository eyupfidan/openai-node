# Openai Node.js Rest Api

This project aims to provide a Node.js API for OpenAI's artificial intelligence API to be seamlessly integrated into your projects.

## Installation

## Manual Install

To manually install the project, run the following command:

```bash
npm install
```

Then update the env.example file with your OpenAI API key and rename it to .env.

## Docker Installation

Alternatively, you can use Docker to install the project. Run the following commands:

```bash
docker build . -t openai-node-project
```

```bash
docker run -p 8080:8080 openai-node-project
```

You can also find the Docker image on -> [DockerHub](https://hub.docker.com/r/eyupfidan/openai-node)

Before running the project, make sure you have signed up for an [OpenAI API key](https://platform.openai.com/overview) and stored it in your environment.

## Usage

To use the OpenAI Node.js API, run the following command:

```bash
npm start
```

Then, you can make a POST request to the /fetchQuestion route with the requestText value in the body to receive the response.

## Screenshot

Here is an example of how to use the API with a POST request using Postman:

![Usage](https://raw.githubusercontent.com/eyupfidan/openai-node-project/main/media/postman-post-request.png?token=GHSAT0AAAAAABZSP2HLFFF2XGRN2VG5GVRGY7KACFA)

## License

MIT © [Eyup Fidan](https://eyupfidan.com)
