angular.module('app.services.list', [])

.factory('listService',function(){
    var list = {};
    var ali = {};
    return {
        getList:function(){
            return list;
        },
        setList:function(newList){
            list = newList;
        },
        getAli:function(){
            return ali;
        },
        setAli:function(newAli){
            ali = newAli;
        }
    }
})
