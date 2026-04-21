#!/bin/bash
# Двойной клик в Finder: поднимает локальный сервер и открывает сайт в браузере.
cd "$(dirname "$0")" || exit 1
PORT=8765
(sleep 0.8 && open "http://127.0.0.1:${PORT}/") &
exec python3 -m http.server "$PORT" --bind 127.0.0.1
