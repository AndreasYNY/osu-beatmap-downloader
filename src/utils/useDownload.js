import Swal from "sweetalert2";

export const useDownload = (beatmapSetId, choseLink) => {
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
          window.open(`https://osu.direct/d/${beatmapSetId}`, "_blank");
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
  return handleDownload
};
