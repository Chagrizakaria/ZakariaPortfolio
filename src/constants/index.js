import {bac,
    attestation,
    Diplome,
    Relvet ,STJprojet,
    Ecomprojet,
    pourc100,
    pourc50,osaka2,html,
    css ,
    javascript,
    react,
    bootstrap,
    php ,
    laravel,
     mysql ,
    mongodb,
    figma ,
     python,
    startuml ,
    trello,Hadith2,inertia,vite,portfolio, tailwind} from "../assets";
export const navLinks = [
    {
        
        id: "Home",
        title: "Home",
    },
    {
        
        id: "About",
        title: "About",
       
    },

    {
        id: "Competance",
        title: "Competance",
    }, {
        id: "Projet",
        title: "Projet",
    },
    {
        id:"contact",
        title:"contact",
    }
];
export const home=[
    {
        id:"Home",
        title:"Hello , I am Chagri Zakaria",
        content:"Developpeur Web Full Stack"
    },
]

export const Formations=[
    {
        id:"Formation-1",
        title:"Attestation developpement Digital 2023",
     
    },
    {
        id:"Formation-2",
        title:"Relvet de notes",
     
    },
    {
        id:"Formation-3",
        title:"Diplome diagnostic automobile 2018",
       
    },
 
    {
        id:"Formation-4",
        title:"Diplome bac 2016",
        
    },
]

export const frontend=[
    {
        id:"Competance-1",
        title :"Javascript",
        img :javascript
        
    },
    {
        id:"Competance-2",
        title :"Html",
        img :html
        
    },
    {
        id:"Competance-3",
        title :"css",
        img :css
        
    },
    // {
    //     id:"Competance-4",
    //     title :"bootstrap",
    //     img :bootstrap
        
    // },
    {
        id:"Competance-5",
        title :"react",
        img :react
        }
];
export const backend=[
    {
        id:"Competance-6",
        title :"php",
        img :php
        
    },
    {
        id:"Competance-7",
        title :"Laravel",
        img :laravel
        
    },
    {
        id:"Competance-8",
        title :"Mysql",
        img :mysql
        
    },
    {
        id:"Competance-9",
        title :"Mongodb",
        img :mongodb
        
    },
];
       
export const autre=[ {
    id:"Competance-10",
    title :"Figma",
    img :figma
    
},
{
    id:"Competance-11",
    title :"Python",
    img :python
    
},
{
    id:"Competance-12",
    title :"StartUml",
    img :startuml
    
},
{
    id:"Competance-13",
    title :"trello",
    img :trello
    
}

];
   



export const MyProject=[
{
    id:"Projet-1",
    title:"StartJobs",
    image:STJprojet,
    content:["StartJobs est un site Vitrine  est destiné à présenter l'entreprise (React)." ,"permettre aux visiteurs de la contacter facilement (Laravel)."],
    pourcentage:pourc100,url:"/",teck:[react,vite,laravel,css]

},
{
    id:"Projet-2",
    title:"Clothing Store",
    image:Ecomprojet,
    content:["Clothing store est  un site web ecomerce (Laravel / inertia).","CRUD gerer les produits"],
    pourcentage:pourc50,url:"/",teck:[laravel,inertia,bootstrap,css]

},
{
    id:"Projet-3",
    title:"Osaka",
    image:osaka2,
    content:[" site web presentation des produits industriels d'une entreprise s'appel Osaka (Laravel Voyager/Template sandbox)."],
    pourcentage:pourc100,url:"/",teck:[laravel,css,bootstrap]

},
{
    id:"Projet-4",
    title:"Hadith",
    image:Hadith2,
    content:["Un petit projet inspiré de la citation du jour, et met en lumière les hadiths du prophète Mahomet, que la paix et la bénédiction soient sur lui.(React-Vite/Bootstrap)"],
    pourcentage:pourc100,url:"https://chagrizakaria.github.io/Hadith/",teck:[react,vite,bootstrap]

},
{
    id:"Projet-5",
    title:"Portfolio Zakaria Chagri",
    image:portfolio,
    content:["Portfolio qui presente mes projets , mes competance et certificat , et  CV détaillé.  "],
    pourcentage:pourc100,url:"/",teck:[react,vite, tailwind]

},


]