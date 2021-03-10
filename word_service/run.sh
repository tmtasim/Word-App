#!/bin/sh
# Adapted from Alex Kleissner's post, Running a Phoenix 1.3 project with docker-compose
# https://medium.com/@hex337/running-a-phoenix-1-3-project-with-docker-compose-d82ab55e43cf

set -e

mix deps.get
mix deps.compile

# Potentially Set up the database
mix ecto.create
mix ecto.migrate

# Start the phoenix web server
mix phx.server