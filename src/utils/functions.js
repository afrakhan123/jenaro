export const validateForm = (value = {}, names = []) => {
  const errors = {};

  Object.keys(value).map((e) => {
    if (names.includes(e)) {
      if(!value[e] || value[e]===""){
        const newName = e.substring(0,1).toUpperCase() + e.substring(1,e.length)
        errors[e] = `${newName} is required.`
      }
    }
  });

  if (Object.keys(errors).length === 0) {
    return false;
  } else {
    return errors
  }
};
