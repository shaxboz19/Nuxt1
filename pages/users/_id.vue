<template>
    <div>
        <h2>{{user.name}} </h2>
        <hr>
        <p>{{user.email}} </p>

    </div>
</template>

<script>
export default {
    validate({params}) {
        console.log(params);
        return !!(params.id *2)
    },

   async asyncData({params, error, store}) {
       try {
        const user = await store.dispatch('user/fetchUsersById', params.id)
        return {user};
       }catch(e){
           error(e)
       }
    
    },
}
</script>