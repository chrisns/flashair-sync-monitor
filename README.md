[![Build Status](https://travis-ci.org/chrisns/flashair-sync-monitor.svg?branch=master)](https://travis-ci.org/chrisns/flashair-sync-monitor)

# Flashair monitoring

## The idea of this project is to:

1. watch one or more flashair sd cards for new files
1. pull the images off the card
1. delete the images off the card
1. publish these to a web/android/ios responsive full screen image viewer (the intended use is to use a firetv stick plugged into the back of a tv)


## USAGE:

```shell
FLASH_AIR_IP=192.168.0.123 PORT=8080 FILES_DIR=./files docker-compose up
````

| Environment variable | Meaning |
| --- | --- |
| FLASH_AIR_IP | IP address of your flashair SD card |
| PORT | Port to run the web service on |
| FILES_DIR | Path to where you want the files to go |