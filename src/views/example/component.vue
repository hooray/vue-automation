<template>
	<div>
		<example-list :list="list"></example-list>
	</div>
</template>

<script>
import exampleList from '@/components/exampleList';

export default {
    components: {
        exampleList
    },
    data() {
        return {
            list: ['张三', '李四', '王五']
        };
    }
};
</script>
