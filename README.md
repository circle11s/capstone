# Capstone

## Introduction

This is the final project of the AltSchool Data Science Track.

## Project Structure

```
.
├── README.md
├── client
└── src
    ├── data
    ├── models
    ├── notebooks
    ├── server.py
    └── utils
```

## Goals

- [ ] Data Preprocessing and EDA (finding patterns, trends)
- [ ] Data cleaning (Removing items with zero sales from the Sales Dataset)
- [ ] Modelling
- [ ] User Interface
- [ ] Flask server

## Setup

- Clone the repo
- Large files (such as models and `train.csv`) are stored in [Git LFS](https://git-lfs.github.com/). Install Git LFS and run `git lfs pull` to download them.

_Server Setup_

- Install [Python 3](https://www.python.org/downloads/)
- Create a virtual environment using `python3 -m venv venv`
- If you're on Linux or MacOs, activate the virtual environment using `source venv/bin/activate`
- If you're on Windows, activate the virtual environment using `venv\Scripts\activate.bat`
- Install requirements using `pip install -r requirements.txt`

_Client Setup_

- Install [Node.js](https://nodejs.org/en/download/)
- Install packages using `npm install`

## Running locally

- If you're on _Linux_ or _MacOS_, start the server using `npm run dev:win-server`
- If youre on _Windows_, use `npm run dev:win-server` to start the server
- In another terminal run the client using `npm run dev:client`

Client will be available at [http://localhost:3000](http://localhost:3000)
Server will be available at [http://localhost:5001](http://localhost:5001)
