import {  toast } from 'react-toastify';

export const marriageSamples = [
    {
        groom: "Sundareshwar Iyyar",
        bride: "Meenakshi Shetty",
        year : 2019,
        videoId: "fAf_XpadCkk",
        place: "Madurai"
    },

    {
        groom: "Rahul Singhania",
        bride: "Jessica Philip",
        year : 2022,
        videoId: "HQuogzrpda8",
        place: "Jaipur"
    },

    {
        groom: "Manish Yadav",
        bride: "Anupama Yadav",
        year : 2021,
        videoId: "pvAAaLXH8NY",
        place: "Varanasi"
    },

    {
        groom: "Virendra Yadav",
        bride: "Arundhati",
        year : 2022,
        videoId: "KV5BILORgq8",
        place: "Ghazipur"
    },

    {
        groom: "Pankaj Malhotra",
        bride: "Renuka Malhotra",
        year : 2023,
        videoId: "aqf8TLBR0HI",
        place: "Varanasi"
    },
    {
        groom: "Fateh",
        bride: "Prabh",
        year : 2021,
        videoId: "8YdFNkgZ4Fg",
        place: "Chandigarh"
    },

    {
        groom: "Maninder",
        bride: "Noordeep",
        year : 2022,
        videoId: "VACmqrJmtFs",
        place: "Amritsar"
    },
]

export const handleCopyText = (a) => {

    let alertText = a;
    navigator.clipboard.writeText(alertText);
    document.getSelection().removeAllRanges();

    toast.success('Phone Number Copied.', {
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