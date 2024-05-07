const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTictacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: false,
  shoTreeView: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error occured! Please try again");
  });
}
export default featureFlagsDataServiceCall;
