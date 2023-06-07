import { useRef, useState } from "react";
import Swal from "sweetalert2";

const DownloadBody = () => {
  const choseLink = useRef(null);
  const [beatmapSetId, setBeatmapSetId] = useState("");

  const handleDownload = () => {
    switch (choseLink.current.value) {
      case "1":
        if (beatmapSetId !== "") {
          window.open(`https://api.nerinyan.moe/d/${beatmapSetId}`, "_blank");
        } else {
          Swal.fire({
            title: "Error!",
            text: "Please Enter Beatmapsets Id or Link First",
            icon: "error",
            confirmButtonText: "Back",
          });
        }
        break;
      case "2":
        if (beatmapSetId !== "") {
          window.open(`https://api.nerinyan.moe/d/${beatmapSetId}?novideo=1`, "_blank");
        } else {
          Swal.fire({
            title: "Error!",
            text: "Please Enter Beatmapsets Id or Link First",
            icon: "error",
            confirmButtonText: "Back",
          });
        }
        break;
      case "3":
        if (beatmapSetId !== "") {
          window.open(`https://api.chimu.moe/v1/download/${beatmapSetId}`, "_blank");
        } else {
          Swal.fire({
            title: "Error!",
            text: "Please Enter Beatmapsets Id or Link First",
            icon: "error",
            confirmButtonText: "Back",
          });
        }
        break;
      case "4":
        if (beatmapSetId !== "") {
          window.open(`https://api.chimu.moe/v1/download/${beatmapSetId}?n=0`, "_blank");
        } else {
          Swal.fire({
            title: "Error!",
            text: "Please Enter Beatmapsets Id or Link First",
            icon: "error",
            confirmButtonText: "Back",
          });
        }
        break;
      case "5":
        if (beatmapSetId !== "") {
          window.open(`https://beatconnect.io/b/${beatmapSetId}/`, "_blank");
        } else {
          Swal.fire({
            title: "Error!",
            text: "Please Enter Beatmapsets Id or Link First",
            icon: "error",
            confirmButtonText: "Back",
          });
        }
        break;
      case "6":
        if (beatmapSetId !== "") {
          window.open(`https://kitsu.moe/d/${beatmapSetId}`, "_blank");
        } else {
          Swal.fire({
            title: "Error!",
            text: "Please Enter Beatmapsets Id or Link First",
            icon: "error",
            confirmButtonText: "Back",
          });
        }
        break;
      default:
        break;
    }
  };

  const getInputValue = (e) => {
    if (e.target.value.length > 8) {
      const data = e.target.value;
      const pattern = /\/(\d+)/;
      const matches = data.match(pattern);
      const sliceData = matches ? matches[1] : null;
      setBeatmapSetId(sliceData);
    } else {
      const data = e.target.value;
      setBeatmapSetId(data);
    }
  };

  const handleHelp = () => {
    window.open(`https://cdn.discordapp.com/attachments/712958280863055903/1107586308165095455/image.png`, "_blank");
  };
  const handleCreator = () => {
    window.open(`https://github.com/CookyNdi`, "_blank");
  };
  const handleVercel = () => {
    window.open(`https://vercel.com/`, "_blank");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${
          beatmapSetId !== ""
            ? `https://assets.ppy.sh/beatmaps/${beatmapSetId}/covers/cover@2x.jpg`
            : `https://assets.ppy.sh/beatmaps/842412/covers/cover@2x.jpg`
        })`,
      }}
      className="w-full min-h-screen bg-cover bg-center bg-white dark:bg-slate-950"
    >
      <div className="w-full min-h-screen flex justify-center items-center backdrop-blur-md">
        <div
          style={{ width: "420px" }}
          className="min-h-screen flex flex-col justify-center items-center backdrop-blur-md opacity-90"
        >
          <div className="h-auto w-full bg-slate-50 border-slate-600 dark:bg-slate-900 border-2 p-6 flex flex-col rounded-xl">
            <h1 className="text-2xl font-semibold text-center mb-2 dark:text-white">Alt Beatmap Downloader</h1>
            <form className="flex flex-col">
              <label className="text-lg font-normal mb-2 dark:text-white">Beatmapset Id or Link</label>
              <input
                type="text"
                className="p-3 rounded-lg mb-2 border-slate-600 border-2 dark:text-white dark:bg-slate-900"
                placeholder="842412"
                onChange={getInputValue}
                value={beatmapSetId}
              />
              <label
                className="text-base font-normal mb-3 underline text-end cursor-pointer dark:text-white"
                onClick={() => handleHelp()}
              >
                What&apos;s Beatmap Set Id?
              </label>
              <select
                className="form-select w-full p-3 rounded-lg mb-4 border-slate-600 border-2 dark:text-white dark:bg-slate-900"
                aria-label="Default select example"
                ref={choseLink}
              >
                <option value="1">Nerinyan</option>
                <option value="2">Nerinyan (No Video)</option>
                <option value="3">Chimu</option>
                <option value="4">Chimu (No Video)</option>
                <option value="5">Beatconnect</option>
                <option value="6">Kitsu Moe</option>
              </select>
            </form>
            <button
              className="w-full p-3 rounded-lg bg-blue-500 text-white dark:bg-blue-700 mb-4"
              onClick={() => handleDownload()}
            >
              Download
            </button>
            <p className="text-black dark:text-white text-center">
              <span className="cursor-pointer" onClick={() => handleCreator()}>
                CookyNdi
              </span>{" "}
              | Powered by{" "}
              <span className="cursor-pointer" onClick={() => handleVercel()}>
                Vercel
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBody;
