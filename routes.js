/* eslint-disable no-undef */

const {AccountRegist , SignInAccount,CheckAuthor} = require("./handling/Account")
const {ValidatePassword,ChangePassword,SettingProfile} = require("./handling/Setting")
const {AddModule,AddImageModule,GetModule,GetModuleByAccount,
    DeleteModule,SettingModule,AddSubModule,GetSubModulById,
    SettingSubModule,DeleteSubModule,AddToPlaylistModule,GetMyplaylistModule,
    DeletePlaylistModule,Exercise,SubmitExercise,GetExerCise,SubmitFinishExercise} = require("./handling/Module")

const routes = [
    {
        method : "*",
        path : '/{any*}',
        options: {auth: false},
        handler : (request,h)=>{
            const response = h.response({
                'Message' : "Tidak Ditemukan"
            })
            response.code(200)

            return response
        }
    },
    {
        method : "GET",
        path : '/',
        options: {auth: false},
        handler : (request,h)=>{
            const response = h.response({
                'Message' : "API AKTIF"
            })
            response.code(404)

            return response
        }
    }
    ,
    {
        method : "POST",
        path : "/AccountRegist",
        options: {auth: false},
        handler : AccountRegist
    },
    {
        method : "POST",
        path : "/SignInAccount",
        options: {auth: false},
        handler : SignInAccount
    },
    {
        method :"GET",
        path : "/GetModule",
        options : {auth: 'jwt-access'},
        handler : GetModule
    },
    {
        method :"POST",
        path : "/AddModule",
        options : {auth: 'jwt-access'},
        handler : AddModule
    },
    {
        method: 'POST',
        path: '/UploadImage',
        options: {
            auth: "jwt-access"
            , payload: {
                maxBytes: 10 * 1024 * 1024,
                output: 'stream', // File diterima dalam bentuk stream
                parse: true, // Parsing otomatis untuk multipart/form-data
                allow: 'multipart/form-data', // Izinkan format multipart
                multipart: true
            },
        },
        handler: AddImageModule,
    },
    {
        method :"DELETE",
        path : "/DeleteModule/{idModule}",
        options : {auth: 'jwt-access'},
        handler : DeleteModule
    },
    {
        method :"DELETE",
        path : "/DeleteSubModule/{idModule}",
        options : {auth: 'jwt-access'}, 
        handler : DeleteSubModule
    },
    {
        method :"GET",
        path : "/GetModuleByAccount/{user}",
        options : {auth: 'jwt-access'},
        handler : GetModuleByAccount
    },
    {
        method :"PUT",
        path : "/SettingSubModule/{idModule}",
        options : {auth: 'jwt-access'},
        handler : SettingSubModule
    },
    {
        method :"PUT",
        path : "/SettingModule/{idModule}",
        options : {auth: 'jwt-access'},
        handler : SettingModule
    },
    {
        method :"POST",
        path : "/AddSubModule",
        options : {auth: 'jwt-access'},
        handler : AddSubModule
    },
    {
        method :"GET",
        path : "/GetSubModulById/{idModule}",
        options : {auth: 'jwt-access'},
        handler : GetSubModulById
    },    
    //GetMyplaylistModule
    {
        method :"GET",
        path : "/GetMyplaylistModule/{user}",
        options : {auth: 'jwt-access'},
        handler : GetMyplaylistModule
    }, 
    {
        method :"POST",
        path : "/AddToPlaylistModule",
        options : {auth: 'jwt-access'},
        handler : AddToPlaylistModule
    },  
    {
        method :"DELETE",
        path : "/DeletePlaylistModule/{idModule}",
        options : {auth: 'jwt-access'}, 
        handler : DeletePlaylistModule
    },
    {
        method :"GET",
        path : "/Exercise/{idModule}",
        options : {auth: 'jwt-access'}, 
        handler : Exercise
    },
    {
        method :"POST",
        path : "/SubmitExercise",
        options : {auth: 'jwt-access'}, 
        handler : SubmitExercise
    },
    {
        method :"GET",
        path : "/GetExerCise/{idModule}",
        options : {auth: 'jwt-access'}, 
        handler : GetExerCise
    },
    {
        method :"POST",
        path : "/SubmitFinishExercise",
        options : {auth: 'jwt-access'}, 
        handler : SubmitFinishExercise
    },
    {
        method :"GET",
        path : "/CheckAuthor",
        options : {auth: 'jwt-access'}, 
        handler : CheckAuthor
    },
    {
        method :"POST",
        path : "/SettingProfile",
        options : {auth: 'jwt-access'}, 
        handler : SettingProfile
    },
    {
        method :"POST",
        path : "/ChangePassword",
        options : {auth: 'jwt-access'}, 
        handler : ChangePassword
    },
    {
        method :"POST",
        path : "/ValidatePassword",
        options : {auth: 'jwt-access'}, 
        handler : ValidatePassword
    }
    
]

module.exports = {routes}