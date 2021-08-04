exports.mongooseErrorHandler = async (err) => {
  let errors = {};
  //Duplicate Key Error
  if (err.code && err.code === 11000) {
    if (err.keyPattern.Email) {
      errors.Email = "Account Already Exist";
    }
    //Ad-Partner Errors
    if (err.keyPattern.OrganisationName) {
      errors.OrganisationName = "Organisation Name Exist";
    }
    //Media-Partner Errors
    if (err.keyPattern.BusinessName) {
      errors.BusinessName = "Business Name Exist Try Different Name";
    }
    if (err.keyPattern.Phone) {
      errors.Phone = "Phone Number Already Exist";
    }
  }
  //Path Validation
  if (err.message.includes("advertismentPartner validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  if (err.message.includes("mediaPartner validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  if (err.message.includes("admin vaidation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  if (err.message.includes("media validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  //Update Validation
  if (err.message.includes("Validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
