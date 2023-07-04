import { useEffect } from "react";
import { useConvertInput } from "../utils/useConvertInput";

const Settings = ({ setTriggerSetting, setIsChecked, backgroundImageId }) => {
  const beatmapSetId = useConvertInput(backgroundImageId);
  useEffect(() => {
    if (localStorage.getItem("backgroundImageId")) {
      if (beatmapSetId !== "") {
        localStorage.setItem("backgroundImageId", `${beatmapSetId}`);
        localStorage.setItem("backgroundFixed", "true");
        setIsChecked(true);
      } else {
        localStorage.setItem("backgroundImageId", `${localStorage.getItem("backgroundImageId")}`);
      }
    }
  }, [beatmapSetId, setIsChecked]);

  const handleSelectChangeBlur = (event) => {
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case "backdrop-blur-none":
        localStorage.setItem("backgroundBlur", "backdrop-blur-none");
        setTriggerSetting(true);
        break;
      case "backdrop-blur-sm":
        localStorage.setItem("backgroundBlur", "backdrop-blur-sm");
        setTriggerSetting(true);
        break;
      case "backdrop-blur-md":
        localStorage.setItem("backgroundBlur", "backdrop-blur-md");
        setTriggerSetting(true);
        break;
      case "backdrop-blur-lg":
        localStorage.setItem("backgroundBlur", "backdrop-blur-lg");
        setTriggerSetting(true);
        break;
      default:
        console.log("error");
        break;
    }
  };

  // const handleCheckboxChange = () => {
  //   switch (localStorage.getItem("backgroundFixed")) {
  //     case "true":
  //       localStorage.setItem("backgroundFixed", "false");
  //       setIsChecked(false);
  //       break;
  //     case "false":
  //       localStorage.setItem("backgroundFixed", "true");
  //       setIsChecked(true);
  //       break;
  //     default:
  //       console.log("error");
  //       break;
  //   }
  // };

  return (
    <div className="w-96 h-auto flex flex-col pt-4 backdrop-blur-md opacity-90">
      <div className="w-full h-auto bg-slate-50 border-slate-600 dark:bg-slate-900 border-2 p-6 flex flex-col rounded-bl-xl">
        <label className="text-lg font-normal mb-2 dark:text-white">Blur</label>
        <select
          className="form-select w-full p-3 rounded-lg mb-4 border-slate-600 border-2 dark:text-white dark:bg-slate-900"
          aria-label="Default select example"
          defaultValue={localStorage.getItem("backgroundBlur")}
          onChange={handleSelectChangeBlur}
        >
          <option value="backdrop-blur-none">None</option>
          <option value="backdrop-blur-sm">Small</option>
          <option value="backdrop-blur-md">Medium</option>
          <option value="backdrop-blur-lg">Large</option>
        </select>
        {/* <label className="text-lg font-normal mb-2 dark:text-white">Background Default</label>
        <input
          type="text"
          className="p-3 rounded-lg mb-4 border-slate-600 border-2 dark:text-white dark:bg-slate-900"
          placeholder={localStorage.getItem("backgroundImageId") ? localStorage.getItem("backgroundImageId") : "842412"}
          onChange={(e) => setbackgroundImageId(e.target.value)}
          value={beatmapSetId}
        />
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            checked={
              localStorage.getItem("backgroundFixed") === "false"
                ? false
                : localStorage.getItem("backgroundFixed") === "true"
                ? true
                : false
            }
            onChange={handleCheckboxChange}
            type="checkbox"
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checked-checkbox" className="ml-2 text-lg font-normal  dark:text-white">
            Fixed Background
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default Settings;
