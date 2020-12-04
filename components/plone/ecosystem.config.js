module.exports = {
  apps: [
    {
      script: "./bin/zeoserver",
      args: "fg",
      name: "rawmaterial-plone-zeoserver",
      cwd: "/opt/rawmaterial/rawmaterial-plone",
      interpreter: "/opt/rawmaterial/rawmaterial-plone/bin/python",
    },
    {
      script: "./bin/instance1",
      args: "console",
      name: "rawmaterial-plone-instance1",
      cwd: "/opt/rawmaterial/rawmaterial-plone",
      interpreter: "/opt/rawmaterial/rawmaterial-plone/bin/python",
    },
  ],
};

