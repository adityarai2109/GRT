export const dragOver = (e) => {
  e.preventDefault();
};

export const dragEnter = (e) => {
  e.preventDefault();
};

export const dragLeave = (e) => {
  e.preventDefault();
};

export const validateFile = (file) => {
  const validTypes = ["image/jpeg", "image/jpg", "image/png"];

  if (validTypes.indexOf(file.type) === -1) {
    alert("File type not permitted");
    return false;
  }
  // console.log("validated");
  return true;
};

export const fileDrop = (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  // console.log(file);
  if (validateFile(file)) return file;
  else return null;
};
