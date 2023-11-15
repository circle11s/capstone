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
- Install [Python 3](https://www.python.org/downloads/)
- Install [Node.js](https://nodejs.org/en/download/)
- Create a virtual environment using `python3 -m venv venv`
- Activate the virtual environment using `source venv/bin/activate`
- Install requirements using `pip install -r requirements.txt`

## Running locally

- Run the server using `npm run server`
- Open the client folder and run the client using `npm run dev`
