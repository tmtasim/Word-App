# Word App

Word App is a simple project for saving different properties of a given word. Currently, we only support whether a
word is palindrome or not. Many other properties are coming soon.

### Technical stack and architecture
The project is devided into two parts: _word_service_ and _ui_.
##### Word Service
This is the backend application which is written in Elixir and the web framework is Phoenix. The main goal of the backend
service is to provide simple API through the REST architectural design principles over HTTP. Elixir is the language of 
choice because of few reasons. The first one is the OTP and the BEAM virtual machine, these are the two main
technologies behind Elixir, and they are well known and battle tested for years for providing highly available systems
which are also scalable. The other reason is the easy syntax of Elixir and its "time to market" value, with the 
containerization technologies this even becomes much easier.
##### UI
The front end part is written in React. The choice for it was mainly because of the easy state management(redux), friendly
community and it's really fast to prototype something with it. It consumes the REST API provided by _word_service_ for fetching 
and creating resources.

### Running locally
In order to run the project locally only **docker** and **docker compose** are needed. Most of the time after installing
docker locally, docker compose is included already in the installation. For installation instructions please check
the following websites:
* Docker: https://www.phoenixframework.org/ https://docs.docker.com/desktop/
* Docker compose: https://docs.docker.com/compose/install/

After successfully installing **docker** and **docker compose** please follow these instructions:
   
   1.`git clone https://github.com/tmtasim/Word-App.git`

   2.`docker-compose build`

   3.`docker-compose up -d`

Now the service could be reached from: `http://localhost:3001/`

### API Documentation
`POST    /api/v1/message` - Post new message  
`GET     /api/v1/message/:id` - Get message for given id  
`DELETE  /api/v1/message/:id` - Delete message  
`GET     /api/v1/message`  - Get all messages


### Sequence Diagram
Sample sequence diagram for fetching all messages

![alt text](https://github.com/tmtasim/Word-App/blob/main/documentation/sequence_diagram.png?raw=true)

## Learn more

  * Elixir official website: https://elixir-lang.org/
  * Erlang/OTP: https://erlang.org/doc/
  * Elixir Phoenix: https://phoenixframework.org/
  * React: https://reactjs.org/
  * Docker: https://www.docker.com/


