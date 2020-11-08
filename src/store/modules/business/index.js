import {businessAdminTable} from '@/api/business'
const business = {
    state:{

    },
    mutations:{

    },
    actions:{
        GetBusinessAdminTable({commit},params){
            console.log(commit)
            return new Promise((resolve,reject)=>{
                businessAdminTable(params).then(res=>{
                    resolve(res)
                }).catch(error=>{
                    reject(error)
                })
            })
        }
    }
}
export default business