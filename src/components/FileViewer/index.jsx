import { IconFolder, IconFile, IconFolderOpen } from "../../utils/icon";

export const FilesViewer = ({ files, onBack, onOpen }) => (
  <table class="table">
    <tbody>
      <tr className="clickable" onClick={onBack}>
        <td className="icon-row">
          <IconFolderOpen />
        </td>
        <td>...</td>
        <td></td>
      </tr>

      {files.map(({ name, directory, size }, i) => {
        return (
          <tr
            className="clickable"
            onClick={() => directory && onOpen(name)}
            key={i}
          >
            <td className="icon-row">
              {directory ? <IconFolder /> : <IconFile />}
            </td>
            <td>
              {name}
              {/* <input type="text" /> */}
            </td>
            <td>
              <span className="float-end">{size}</span>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
