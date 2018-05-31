@echo off
title Building Ardublockly......
echo Building Ardublockly
pause
cd blockly
python build.py
cd ..
python3 package/build_pyinstaller.py
cd package/electron/
npm install
pause
npm run release
pause