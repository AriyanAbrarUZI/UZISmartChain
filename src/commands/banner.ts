import command from '../../config.json' assert {type: 'json'};

const createBanner = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")
  command.ascii.forEach((ele) => {
    let bannerString = "";
    //this is for the ascii art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }
    
    let eleToPush = `<pre>${bannerString}</pre>`;
    banner.push(eleToPush);
  });  
  banner.push("<br>");
  banner.push("Welcome to UZI Smart Chain by Ariyan");
  banner.push("টাইপ করুন <span class='command'>'help'</span> যাতে কমান্ড অ্যাক্টিভেট হয়!");
  banner.push("<br>");
  return banner;
}

export const BANNER = createBanner();
