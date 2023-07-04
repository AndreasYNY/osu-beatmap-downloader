export const useHandleLink = () => {
  const handleHelp = () => {
    window.open(`https://cdn.discordapp.com/attachments/712958280863055903/1107586308165095455/image.png`, "_blank");
  };
  const handleCreator = () => {
    window.open(`https://github.com/CookyNdi`, "_blank");
  };
  const handleVercel = () => {
    window.open(`https://vercel.com/`, "_blank");
  };
  return [handleHelp, handleCreator, handleVercel];
};
