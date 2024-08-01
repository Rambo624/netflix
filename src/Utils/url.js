export const LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
export const USER_AVATAR = "https://th.bing.com/th/id/R.c6c592b55bb6d61bb53a504344256742?rik=bh3f5t61tnC91A&riu=http%3a%2f%2fsites.psu.edu%2fmarvelstudios%2fwp-content%2fuploads%2fsites%2f40386%2f2016%2f03%2fironman_marvel.jpg&ehk=Bjr%2bGNWvRgyFCZXuECMZMPUTt8UcZCmsCU6lldgSsSU%3d&risl=&pid=ImgRaw&r=0"
export const API_KEY = "3aa1cdbe864ac394f2fe40c19c4c6e8b"

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
    }
  };
  
  export const POSTER_URL=`https://image.tmdb.org/t/p/w500`

  export const SUPPORTED_LANG= [{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"},{identifier:"ml",name:"Malayalam"}]

  

  export const GPT_KEY = import.meta.env.VITE_GPT_KEY;