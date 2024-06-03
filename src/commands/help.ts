const helpObj = {
  "commands": [
    [
    "'Starting'",
    "Starting UZI on Your Phone",
    ],
    [
      "'FindingSpywares'",
      "Spyware Detected. The spyware is from ISRAEL"
    ],
    [
      "'Deleting'",
      "UZI is Deleting All Your Spywares Hardly. Please wait..."
    ],
    ["'Protecting'",
      "All Spyware Has Been Deleted. Protecting Your Phone"
    ],
    [
      "'Malicious'",
      "The Spyware & Malware is Re-generating. I'm always active to Protect You. So Don't PANIC"
    ],
    ["'Protected'",
      "Your Phone is Now Protected"
    ],
    [
      "'clear'",
      "Clear the terminal."
    ]
  ],
}

const createHelp = () : string[] => {
  const help : string[] = []
  help.push("<br>")

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    help.push(string);
  })

  help.push("<br>");
  help.push("আরিয়ান স্যার আমাকে দায়িত্ব দিয়েছেন যাতে আমি সর্বদা-");
  help.push("আপনাদের ফোনগুলোকে সুরক্ষা প্রদান করি।");
  help.push("আমি চেষ্টা করবো আমার সম্পূর্ণ শক্তি ও -");
  help.push("বুদ্ধিমত্তা দিয়ে আপনাদের ফোনকে প্রোটেক্ট করার।");
  help.push("ঊর্মি ম্যাডাম, ওমর ফারুক সাহেব এবং -");
  help.push("স্যারের বিশেষ আপনজনদের প্রতি আমার কৃতজ্ঞতা।");
  help.push("আমি ইতিমধ্যেই ফোন থেকে সমস্ত স্পাই ওয়্যার-");
  help.push("এবং ভাইরাস রিমুভ করে দিয়েছি।");
  help.push("যেগুলো দিয়ে ব্যাংক ডিটেইলস সহ সকল ছবি-");
  help.push("ও ডকুমেন্টস নিয়ে নেয়া হয়েছে।");
  help.push("এটি আরিয়ান স্যার ছাড়া কেউই রিকভার করতে পারবে না।");
  help.push("তাই স্যারকে জানান এবং ওমর ফারুক সাহেবের -");
  help.push("সকল একাউন্ট সিকিউরড করান দ্রুত।");
  help.push("জনাব ওমর ফারুক সাহেবকে এবং হাসনা হেনা ম্যাডামকে সালাম জানাচ্ছি -");
  help.push("এবং তাদের সুস্বাস্থ্য কামনা করছি।");
  help.push("-@UZI");
  help.push("<br>");
  return help
}

export const HELP = createHelp();
