<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<text>{{result}}</text>
			<button @click="add()">conut</button>
			<button @click="add1()">conutAdd1</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				result: 0
			}
		},
		onLoad() {

		},
		methods: {
			add() {
				//获取宿主上下文
				var main = plus.android.runtimeMainActivity();
				//通过反射获取Android的Intent对象
				var Intent = plus.android.importClass("android.content.Intent");
				//通过宿主上下文创建 intent
				var intent = new Intent(main.getIntent());
				//设置要开启的Activity包类路径  com.HBuilder.integrate.MainActivity换掉你自己的界面
				intent.setClassName(main, "io.dcloud.HelloH5.TestActivity");
				//开启新的任务栈 （跨进程）
				intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
				//uni向android原生界面传值
				intent.putExtra("uni_key", "来自uniapp的值");

				//请求码保证了，开始的新界面和返回的是同一个操作
				var CODE_REQUEST = 1000
				//采用startActivityForResult开启新的界面，当界面关闭时可以处理返回结果， CODE_REQUEST请求码是唯一标识
				main.startActivityForResult(intent, CODE_REQUEST);

				//设置原生界面返回后的回调操作
				main.onActivityResult = function(requestCode, resultCode, data) {
					if (requestCode == CODE_REQUEST) {
						alert(requestCode); //这个是正确的 1000  
						alert(resultCode); //始终都是0  
						alert(data); //弹出 undefined   
					}
				}

			},
			add1() {
				var AddCount = plus.android.importClass('io.dcloud.HelloH5.wxapi.AddCount');
				var addCount = new AddCount();
				this.result = addCount.add(1, 2);
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
