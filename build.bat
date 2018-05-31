@echo off
title Building Ardublockly......
echo Building Ardublockly
pause
cd blockly
python build.py
cd ..
python3 package/build_pyinstaller.py
