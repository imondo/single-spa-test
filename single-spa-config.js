function renderVueApp() {
	$('section').html('<div id="app"></div>');
	if (!$('#chunkVender')[0] && !$('#vueApp')[0]) {
		$('body').append(
			`<script id="chunkVender" src="https://one-pupil.github.io/vue-template/static/js/chunk-vendors.js"/>`
		);
		$('body').append(`<script id="vueApp" src="https://one-pupil.github.io/vue-template/static/js/app.js"/>`);
		console.log('vue mount');
	}
}

function renderReactApp() {
	$('section').html('<div id="app"></div>');
	if (!$('#reactApp')[0]) {
		$('body').append(`<script id="1reactApp" src="../react-spa/react/1.react-spa.js"/>`);
		$('body').append(`<script id="reactApp" src="../react-spa/react/react-spa.js"/>`);
		console.log('react mount');
	}
}

/* 注册 app */
singleSpa.registerApplication(
	'vue-spa', // app 名称
	{
		bootstrap(props) {
			// 初始化
			return Promise.resolve().then(() => {
				console.log('vue bootstrap');
			});
		},
		mount(props) {
			// 挂载
			return Promise.resolve().then(() => {
				renderVueApp();
			});
		},
		unmount(props) {
			// 卸载
			return Promise.resolve().then(() => {
				console.log('vue unmount');
			});
		}
	}, // 当前 app 生命周期
	(location) => location.href.includes('spa.html#/login') // 当前 app 启用条件
);

singleSpa.registerApplication(
	'react-spa', // app 名称
	{
		bootstrap(props) {
			// 初始化
			return Promise.resolve().then(() => {
				console.log('react bootstrap');
			});
		},
		mount(props) {
			// 挂载
			return Promise.resolve().then(() => {
				renderReactApp();
			});
		},
		unmount(props) {
			// 卸载
			return Promise.resolve().then(() => {
				console.log('react unmount');
			});
		}
	}, // 当前 app 生命周期
	(location) => location.href.includes('spa.html#/react-spa') // 当前 app 启用条件
);

/* 启动 */
singleSpa.start();
