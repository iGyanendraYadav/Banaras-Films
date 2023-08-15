import { toast } from "react-toastify";

export const marriageSamples = [
  {
    groom: "Kanistha",
    bride: "Saumya",
    year: 2019,
    videoId: "fAf_XpadCkk",
    place: "Madurai",
  },

  {
    groom: "Ishtmeet",
    bride: "Jaspreet",
    year: 2022,
    videoId: "HQuogzrpda8",
    place: "Jalandhar",
  },

  {
    groom: "Yaad",
    bride: "Kiran",
    year: 2021,
    videoId: "pvAAaLXH8NY",
    place: "Varanasi",
  },

  {
    groom: "Manpreet",
    bride: "Gurkanwal",
    year: 2022,
    videoId: "KV5BILORgq8",
    place: "Ghazipur",
  },

  {
    groom: "Gaurav",
    bride: "Lagan",
    year: 2023,
    videoId: "aqf8TLBR0HI",
    place: "Varanasi",
  },
  {
    groom: "Fateh",
    bride: "Prabh",
    year: 2021,
    videoId: "8YdFNkgZ4Fg",
    place: "Chandigarh",
  },

  {
    groom: "Maninder",
    bride: "Noordeep",
    year: 2022,
    videoId: "VACmqrJmtFs",
    place: "Amritsar",
  },
];

export const handleCopyText = (a) => {
  let alertText = a;
  navigator.clipboard.writeText(alertText);
  document.getSelection().removeAllRanges();

  toast.success("Phone Number Copied.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};


