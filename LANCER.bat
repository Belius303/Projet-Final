@echo off
rem Lance le site La Maison Orientale en local et ouvre le navigateur quand il est pret.
cd /d "%~dp0"
if not exist node_modules (
  echo Installation des dependances, une seule fois...
  call npm install --no-audit --no-fund || goto :eof
)
start "" /b powershell -NoProfile -Command "while ($true) { try { (New-Object Net.Sockets.TcpClient('localhost', 3000)).Close(); break } catch { Start-Sleep 1 } }; Start-Process 'http://localhost:3000'"
call npm start
