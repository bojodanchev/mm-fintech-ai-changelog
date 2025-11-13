@echo off
echo ========================================
echo MM Fintech AI Changelog - Network Mode
echo ========================================
echo.

REM Get local IP address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    set IP=%%a
    goto :found
)
:found
set IP=%IP:~1%
echo Your local IP address: %IP%
echo.

echo Building production version...
call npm run build
if errorlevel 1 (
    echo Build failed! Please check the errors above.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Server starting...
echo ========================================
echo.
echo Your colleagues can access the changelog at:
echo   http://%IP%:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm start -- -H 0.0.0.0

