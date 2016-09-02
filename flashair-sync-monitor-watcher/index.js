const flashair = require("flashair2")(process.env.FLASH_AIR_IP, "AP");

flashair.command.getUpdateStatus(status => {
  if (status) {
    flashair.command.getFileList("/", (err, files) => {
      if (err) {
        throw err;
      }
      console.log(files);
      //  get files that we don't already have then delete the file
    });
  }
})


