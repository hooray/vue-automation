<template>
	<div class="sprites">
		<div class="address"></div>
		<div class="feedback"></div>
		<div class="payment"></div>
		<div class="info">在 vue.config.js 里配置精灵图路径等信息，如果要新增一个精灵图目录，则先复制一份 new SpritesmithPlugin() ，修改目录名和文件名，然后重新运行 serve 任务即可。</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/sprites/_example.scss';

.sprites {
    padding: 10px;
    .address,
    .feedback,
    .payment {
        display: inline-block;
        margin-right: 10px;
    }
    .address {
        @include sprite($example-address);
    }
    .feedback {
        @include sprite($example-feedback);
    }
    .payment {
        @include sprite($example-payment);
    }
}
</style>
