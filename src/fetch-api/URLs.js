import Config from '../config';
const urlBaseApi = (Config.urlBaseApi||"http://localhost")+":"+(Config.PORTAPI||"3001");
const urlBaseApp = (Config.urlBaseApp||"http://localhost")+":"+(Config.PORTAPP||"3000");
const URLs={
    defaultUser:"https://ui-avatars.com/api/?background=227aee&name=Renzo+Veliz&color=FFFF",
    getTrilhasAll:urlBaseApi+"/api/trilhas",
    deleteTrilha:urlBaseApi+"/api/trilhas",
    urlImages:urlBaseApi+"/images/",
    urlEmailEnvio:urlBaseApp+"/emailenvio"
}

export default URLs; 