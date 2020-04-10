const ROOT_ROUTER = 'vue-template';

function renderApp() {
    $('section').html('<div id="app"></div>');
    if (!$('#chunkVender')[0] && !$('#vueApp')[0]) {
        $('body').append(
            `<script id="chunkVender" src="https://one-pupil.github.io/vue-template/static/js/chunk-vendors.js"/>`
        );
        $('body').append(
            `<script id="vueApp" src="https://one-pupil.github.io/vue-template/static/js/app.js"/>`
        );
        console.log('mount');
    }
}

const lifecycle = {
	bootstrap(props) { // 初始化
		return Promise.resolve().then(() => {});
	},
	mount(props) { // 挂载
		return Promise.resolve().then(() => {
			window.location.hash = `/login`;
			renderApp();
		});
	},
	unmount(props) { // 卸载
		return Promise.resolve().then(() => {
			console.log('unmount');
		});
	}
};

/* 注册 app */
singleSpa.registerApplication(
	ROOT_ROUTER, // app 名称
	lifecycle, // 当前 app 生命周期
	(location) => location.href.includes(ROOT_ROUTER) // 当前 app 启用条件
);

/* 启动 */
singleSpa.start();
