# Lab 4 – Express (04_express_33784157)

Simple Node.js/Express application deployed on the Goldsmiths DOC VM proxy.

- **Student ID:** 33784157  
- **VM ID:** 428  
- **Public URL:** http://www.doc.gold.ac.uk/usr/428/  
- **Contact:** amitk002@campus.goldsmiths.ac.uk

---

## Overview

This app demonstrates a minimal Express server listening on **port 8000**, exposed publicly via the DOC proxy.  
It implements the four required routes and is kept running using **forever**.

### Routes

| Path        | Description                                  |
|-------------|----------------------------------------------|
| `/`         | “Hello World!”                               |
| `/about`    | About this Lab 4 app                         |
| `/contact`  | Contact email link                           |
| `/date`     | Current server date/time                     |
| `/healthz`  | (Optional) health check endpoint (200 OK)    |

---

## Repository structure

