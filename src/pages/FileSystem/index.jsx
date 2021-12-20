import React, { useState, useMemo } from "react";
import { FilesViewer } from "../../components/FileViewer";
import Layout from "../../components/Layout";
import "./file-system.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconFolder, IconFile } from "../../utils/icon";

const fs = window.require("fs");
const pathModule = window.require("path");

const { app } = window.require("@electron/remote");

const formatSize = (size) => {
  var i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    " " +
    ["B", "kB", "MB", "GB", "TB"][i]
  );
};

const FileSystem = () => {
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const homeDir = require("os").homedir(); // See: https://www.npmjs.com/package/os
  const desktopDir = `${homeDir}/Desktop`;

  const [path, setPath] = useState(app.getAppPath());
  console.log(desktopDir);

  let dir = "./New folder";

  React.useEffect(() => {
    readFiles();
  }, [path]);

  const readFiles = () => {
    const fileDir = fs
      .readdirSync(path)
      .map((file) => {
        const stats = fs.statSync(pathModule.join(path, file));
        return {
          name: file,
          size: stats.isFile() ? formatSize(stats.size ?? 0) : null,
          directory: stats.isDirectory(),
        };
      })
      .sort((a, b) => {
        if (a.directory === b.directory) {
          return a.name.localeCompare(b.name);
        }
        return a.directory ? -1 : 1;
      });

    setFiles(fileDir);
  };

  const handleFolder = () => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      setIsDropDownOpen(false);
      readFiles();
    }
  };

  const handleFile = () => {
    fs.writeFile("newfile.txt", "Learn Node FS module", function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
      setIsDropDownOpen(false);
      readFiles();
    });
  };

  const onBack = () => setPath(pathModule.dirname(path));
  const onOpen = (folder) => setPath(pathModule.join(path, folder));

  const [searchString, setSearchString] = useState("");
  const filteredFiles = files.filter((s) => s.name.startsWith(searchString));

  return (
    <Layout>
      <div className="container mt-2">
        <h4>{path}</h4>
        <div className="form-group mt-4 mb-2 file-system-search-container">
          <input
            value={searchString}
            onChange={(event) => setSearchString(event.target.value)}
            className="form-control form-control-sm"
            placeholder="File search"
          />

          <div className="add-btn-container">
            <div
              className="add-btn dropdown-toggle"
              onClick={() => setIsDropDownOpen((prev) => !prev)}
            />
          </div>
          <div
            className={`add-drop-down-content ${
              isDropDownOpen && "show-drop-down"
            }`}
          >
            <div className="drop-list" onClick={handleFolder}>
              <IconFolder /> Create Folder
            </div>
            <div className="drop-list" onClick={handleFile}>
              <IconFile /> Create File
            </div>
          </div>
        </div>
        <FilesViewer files={filteredFiles} onBack={onBack} onOpen={onOpen} />
      </div>
    </Layout>
  );
};

export default FileSystem;
