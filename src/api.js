// api.js
const checkProjectLink = async (projectLink) => {
  try {
    const res = await fetch(projectLink);
    if (res.status !== 200) {
      return false;
    } else {
      if (/^https?:\/\/\S+$/.test(projectLink)) {
        return true;
      } else {
        return false;
      }
    }
  } catch (err) {
    return false;
  }
};

export {
  checkProjectLink
};