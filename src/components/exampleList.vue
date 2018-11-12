<template>
	<div>
		<ul>
			<li v-for="(item, index) in list" :key="index">{{item}}</li>
		</ul>
	</div>
</template>

<script>
export default {
    name: 'exampleList',
    props: {
        list: Array
    }
};
</script>
