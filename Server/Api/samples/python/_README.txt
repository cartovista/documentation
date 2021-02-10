*****************
* Pre-requisit: *
*****************
	- Python version 3.9 (others might work but this was tested with this version)
	ref : https://www.python.org/ftp/python/3.9.0/python-3.9.0-amd64.exe

****************************
* Things to watchout for:  *
****************************
	- PATH Environment variable; Watchout for conflicts in PATH if you have many versions of pyton installed. Pip might be installing packages for the wrong python interpreter

***************************
* Module(s) installation: *
***************************
	- pip install certifi six python_dateutil setuptools urllib3
	

**********
* Setup: *
**********
	- python python-client-code\setup.py install --user


***************************
* Development environment *
***************************
note: Use any prefered environment, ex Visual Studio Code

	- Visual Studio Code
	To run main.py in visual studio code simply open the terminal and run python main.py
	In visual studio code you can also debug the file by going clicking run (the play/debug icon) on the left sidebar while main.py is open , clicking run and debug and then selecting current pyton file

