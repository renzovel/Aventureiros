import Config from '../config';
const urlBase = Config.urlBase||"http://localhost:3001";
const URLs={
    defaultUser:"https://ui-avatars.com/api/?background=227aee&name=Renzo+Veliz&color=FFFF",
    getTrilhasAll:urlBase+"/api/trilhas",
    deleteTrilha:urlBase+"/api/trilhas",
    urlImages:urlBase+"/images/"
}

export default URLs; 