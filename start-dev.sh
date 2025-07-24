#!/bin/bash
PORT=3000

# 杀掉占用端口的进程
PID=$(lsof -ti tcp:$PORT)
if [ -n "$PID" ]; then
  echo "Killing process on port $PORT (PID: $PID)"
  kill -9 $PID
fi

# 进入项目目录并启动 next dev
cd GS-open-react
echo "Starting Next.js on port $PORT"
npm run dev -- -p $PORT 