<template>
    <div>
        <ExampleList :list="list"></ExampleList>
    </div>
</template>

<script>
import ExampleList from '@/components/exampleList'

export default {
    components: {
        ExampleList
    },
    data() {
        return {
            list: ['张三', '李四', '王五']
        }
    }
}
</script>
