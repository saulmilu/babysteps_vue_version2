<template>

    <div>
        <p> Alocacoes</p>
        <router-link :to="{name : 'alocForm'}">
            <p>
                para form
            </p>
        </router-link>
        <router-link :to="{name : 'alocList'}">
            <p>
                para list
            </p>
        </router-link>
        <router-view>

        </router-view>
    </div>
  
</template>

<script>
export default {
    name : 'Alocacoes'

}
</script>

<style>

</style>