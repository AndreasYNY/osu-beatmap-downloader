import { useEffect, useRef, useState } from "react";
import Audio from "./components/Audio";
import Settings from "./components/Settings";
import { useDownload } from "./utils/useDownload";
import { useHandleLink } from "./utils/useHandleLink";
import { IoMdSettings } from "react-icons/io";
import { useConvertInput } from "./utils/useConvertInput";

const App = () => {
  const choseLink = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const beatmapSetId = useConvertInput(inputValue);

  const handleDownload = useDownload(beatmapSetId, choseLink);
  const [handleHelp, handleCreator, handleVercel] = useHandleLink();

  const [clicked, setClicked] = useState(false);
  const [buttonSetting, setButtonSetting] = useState("");
  const [settingBar, setSettingBar] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [backgroundImage, setbackgroundImage] = useState("");
  const [backgroundImageId, setbackgroundImageId] = useState("");

  const handleSetting = () => {
    if (clicked === true) {
      setClicked(false);
    } else if (clicked === false) {
      setClicked(true);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("backgroundFixed") === "true") {
      if (localStorage.getItem("backgroundImageId")) {
        setbackgroundImage(
          `https://assets.ppy.sh/beatmaps/${localStorage.getItem("backgroundImageId")}/covers/cover@2x.jpg`
        );
      } else {
        setbackgroundImage(`https://assets.ppy.sh/beatmaps/1321688/covers/cover@2x.jpg`);
      }
    } else if (localStorage.getItem("backgroundFixed") === "false") {
      if (beatmapSetId !== "") {
        setbackgroundImage(`https://assets.ppy.sh/beatmaps/${beatmapSetId}/covers/cover@2x.jpg`);
      } else {
        setbackgroundImage(`https://assets.ppy.sh/beatmaps/1321688/covers/cover@2x.jpg`);
      }
    }
    if (!localStorage.getItem("backgroundFixed")) {
      localStorage.setItem("backgroundFixed", "false");
    }
    if (!localStorage.getItem("backgroundBlur")) {
      localStorage.setItem("backgroundBlur", "backdrop-blur-sm");
      setBackgroundBlur(localStorage.getItem("backgroundBlur"));
    }
  }, [isChecked, beatmapSetId, backgroundImageId]);

  useEffect(() => {
    if (clicked === false) {
      setButtonSetting(
        "absolute top-4 right-4 backdrop-blur-md opacity-90 bg-slate-50 border-none dark:bg-slate-900 rounded-lg "
      );
      setSettingBar("absolute top-0 -right-96 hidden");
    } else if (clicked === true) {
      setButtonSetting(
        "absolute top-4 right-96 backdrop-blur-md opacity-90 bg-slate-50 border-none dark:bg-slate-900 rounded-l-lg"
      );
      setSettingBar("absolute top-0 right-0");
    }
  }, [buttonSetting, settingBar, clicked]);

  const [triggerSetting, setTriggerSetting] = useState(false);
  const [backgroundBlur, setBackgroundBlur] = useState(localStorage.getItem("backgroundBlur"));

  useEffect(() => {
    if (triggerSetting === true) {
      setBackgroundBlur(localStorage.getItem("backgroundBlur"));
      setTriggerSetting(false);
    }
  }, [triggerSetting]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="w-full min-h-screen bg-cover bg-center bg-white dark:bg-slate-950"
    >
      <div className={`w-full min-h-screen flex justify-center items-center relative ${backgroundBlur}`}>
        <div>
          <div className={buttonSetting}>
            <button className="p-3 " onClick={() => handleSetting()}>
              <IoMdSettings className="text-4xl text-white" />
            </button>
          </div>
          <div className={settingBar}>
            <Settings
              setTriggerSetting={setTriggerSetting}
              setIsChecked={setIsChecked}
              isChecked={isChecked}
              setbackgroundImageId={setbackgroundImageId}
              backgroundImageId={backgroundImageId}
            />
          </div>
        </div>
        <div style={{ width: "420px" }} className="min-h-screen flex flex-col justify-center items-center opacity-90">
          <div className="h-auto w-full bg-slate-50 border-slate-600 dark:bg-slate-900 border-2 p-6 flex flex-col rounded-xl">
            <h1 className="text-2xl font-semibold text-center mb-2 dark:text-white">Alt Beatmap Downloader</h1>
            <form className="flex flex-col">
              <label className="text-lg font-normal mb-2 dark:text-white">Beatmapset Id or Link</label>
              <input
                type="text"
                className="p-3 rounded-lg mb-2 border-slate-600 border-2 dark:text-white dark:bg-slate-900"
                placeholder="842412"
                onChange={(e) => setInputValue(e.target.value)}
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
                <option value="6">Osu Direct</option>
              </select>
            </form>
            <Audio beatmapSetId={beatmapSetId} />
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

export default App;
