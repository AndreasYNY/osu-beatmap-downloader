import { useRef, useState } from "react";

const DownloadBody = () => {
  const choseLink = useRef(null);
  const [beatmapSetId, setBeatmapSetId] = useState("");

  const handleDownload = () => {
    switch (choseLink.current.value) {
      case "1":
        if (beatmapSetId !== "") {
          window.open(`https://api.nerinyan.moe/d/${beatmapSetId}`, "_blank");
        } else {
          window.alert("Please Enter Beatmapsets Id First ");
        }
        break;
      case "2":
        if (beatmapSetId !== "") {
          window.open(`https://api.nerinyan.moe/d/${beatmapSetId}?novideo=1`, "_blank");
        } else {
          window.alert("Please Enter Beatmapsets Id First ");
        }
        break;
      case "3":
        if (beatmapSetId !== "") {
          window.open(`https://api.chimu.moe/v1/download/${beatmapSetId}`, "_blank");
        } else {
          window.alert("Please Enter Beatmapsets Id First ");
        }
        break;
      case "4":
        if (beatmapSetId !== "") {
          window.open(`https://beatconnect.io/b/${beatmapSetId}/`, "_blank");
        } else {
          window.alert("Please Enter Beatmapsets Id First ");
        }
        break;
      default:
        break;
    }
  };

  const getInputValue = (e) => {
    const data = e.target.value;
    setBeatmapSetId(data);
  };


  const handleHelp = () => {
    window.open(`https://cdn.discordapp.com/attachments/712958280863055903/1107586308165095455/image.png`, "_blank");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-white dark:bg-slate-950">
      <div
        className="h-auto bg-slate-50 border-slate-600 dark:bg-slate-900 border-2 p-6 flex flex-col rounded-xl"
        style={{ width: "420px" }}
      >
        <h1 className="text-2xl font-semibold text-center mb-2 dark:text-white">Alt Beatmap Downloader</h1>
        <form className="flex flex-col">
          <label className="text-lg font-normal mb-2 dark:text-white">Beatmapset Id</label>
          <input
            type="text"
            className="p-3 rounded-lg mb-2 border-slate-600 border-2 dark:text-white dark:bg-slate-800"
            placeholder="842412"
            onChange={getInputValue}
            value={beatmapSetId}
          />
          <label className="text-base font-normal mb-3 underline text-end cursor-pointer dark:text-white" onClick={() => handleHelp()}>
            Where&apos;s Beatmap Set Id?
          </label>
          <select
            className="w-full p-3 rounded-lg mb-3 border-slate-600 border-2 dark:text-white dark:bg-slate-800"
            aria-label="Default select example"
            ref={choseLink}
          >
            <option value="1">Nerinyan</option>
            <option value="2">Nerinyan (No Video)</option>
            <option value="3">Chimu</option>
            <option value="4">Beatconnect</option>
          </select>
        </form>
        <button
          className="p-3 rounded-lg bg-blue-500 text-white mb-3 dark:bg-blue-700"
          style={{ width: "100%" }}
          id="btn"
          onClick={() => handleDownload()}
        >
          Download
        </button>
        <img
          className="w-full object-cover rounded-lg border-slate-600 border-2 dark:text-white"
          src={
            beatmapSetId !== ""
              ? `https://assets.ppy.sh/beatmaps/${beatmapSetId}/covers/cover.jpg`
              : "https://assets.ppy.sh/beatmaps/842412/covers/cover.jpg"
          }
          alt="cover"
        />
      </div>
    </div>
  );
};

export default DownloadBody;
