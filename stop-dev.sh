#!/bin/bash
PORT=3000

PID=$(lsof -ti tcp:$PORT)
if [ -n "$PID" ]; then
  echo "Killing process on port $PORT (PID: $PID)"
  kill -9 $PID
else
  echo "No process found on port $PORT"
fi 