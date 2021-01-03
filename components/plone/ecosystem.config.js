module.exports = {
  apps: [
    {
      script: "./bin/zeoserver",
      args: "fg",
      name: "rawmaterial-zeoserver",
      cwd: "/opt/rawmaterial/rawmaterial.buildout/components/plone",
      interpreter: "/opt/rawmaterial/rawmaterial.buildout/components/plone/bin/python",
    },
    {
      script: "./bin/instance1",
      args: "console",
      name: "rawmaterial-plone-instance1",
      cwd: "/opt/rawmaterial/rawmaterial.buildout/components/plone",
      interpreter: "/opt/rawmaterial/rawmaterial.buildout/components/plone/bin/python",
    },
  ],
};

