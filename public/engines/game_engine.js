
let game;

const addStates = () => {
    game.scene.add('boot', new BootLoader({ game }))
    game.scene.add('staticLoader', new StaticLoader({ game }))
    game.scene.add('levelScene', new LevelScene({ game }))
    game.scene.add('gardenScene', new GardenScene({ game }))
    game.scene.add('mainMenu', new MainMenu({ game }))

    // game.scene.add('X3MDebug', new X3MDebug({ game, isVisible: false }), true)
}

const initCustomMethods = () => {
    game.vibrate = (value) => {
        return; // Disabled for internal
        if (game.deviceType.isIOS()) return;
        if (!game.playerData.getLocal().settings.vibrations) return;
        if ("vibrate" in window.navigator) window.navigator.vibrate(value);
    };
};



const init = () => {
    window.versionNumber = "0.1.2";
    window.versionCode = "34";

    // const res = getScreenResolution();
    const res = getScreenResolution(deviceScreen, deviceType)
    console.log(TAG, "Running game with resolution: ", res.width + "x" + res.height);
    const config = {
        type: Phaser.WEBGL,
        width: res.width,
        // render: {
        //     antialias: false,
        //     antialiasGL: false,
        //     clearBeforeRender: false,
        //     powerPreference: "high-performance"
        // },
        height: res.height,
        input: { activePointers: 3 },
        mipmapFilter: 'LINEAR',
        scale: { mode: Phaser.Scale.ScaleModes.FIT, width: res.width, height: res.height },
        plugins: { scene: [{ key: 'SpinePlugin', plugin: window.SpinePlugin, mapping: 'spine' }] }
    };

    game = new FlowerQuestGame(config);
    deviceScreen.changeAlignment();

    initWindowExtensions(game);
    initGameVariables(res);
    initGameComponents();
    initExtensions();
    addStates();
    loadFonts();
    initCustomMethods();


    // Maybe needed for desktop???
    // game.events.on(Phaser.Core.Events.PAUSE, onPause)
    deviceScreen.enableAutoGameResize(game);



    if (cordova_is_ready) {
        initCordovaPlugins();
        startState();
    } else {
        should_initialize_plugins = true;
    }
};

const cordovaReady = () => {
    console.log(TAG, "Cordova is ready.");
    cordova_is_ready = true;

    if (should_initialize_plugins) {
        initCordovaPlugins();
        startState();
    }
};

const initCordovaPlugins = () => {
    console.log(TAG, "Initializing cordova plugins.");
    should_initialize_plugins = false;

    // In case any plugins need to be instanced before boot state
    // Note that this function is NOT called on desktop


    // Replace the window.open button if the inAppBrowser plugin is present
    if (cordova.InAppBrowser)
        window.open = cordova.InAppBrowser.open;

    deviceScreen.lockOrientation("landscape");
    deviceScreen.enableAutoAlignment();

    console.log(TAG, "Cordova plugins are ready to be used.");
};

const startAdmob = () => {
    const units = {
        BANNER: "ca-app-pub-xxx/yyy",
        REWARDED: "ca-app-pub-xxx/yyy"
    }
    const TESTING = true;
    const test_platform = "android";
    const test_devices = ["BA8AEC1CD5E9F03FD6A2CCB3E387F9C4"];

    game.admob = new Admob4F(units, TESTING, test_platform, test_devices);

    const config = {
        banner: {
            position: "bottom",
            color: "black",
            offset: 0,
            top: 0,
            bottom: 0
        },
        appOpen: {
            orientation: 4
        }
    }

    game.admob.start(config).then(() => console.log('ADMOB STARTED SUCCESFULLY: ', game.admob))

    // At the start of our app we check if the player has purchased the noAds product
    // if (noAds.isPurchased()) game.admob.disable();
}


const startState = () => {
    // game.network = new Network4f(new NetworkManager(game))
    game.playerData.saveDevice(getUserDevice(7))

    initAppVersion();

    initNotificationManager();

    game.socialsharing = new SocialSharing();
    startAdmob()

    const stg = game.playerData;
    // extra parameters like chapter, level that get saved with each purchase
    const extra_save_parameters = stg.getExtraSaveParametersForPurchase.bind(stg);
    const screen_blocker = {
        font: "boogaloo",
        loader: {
            bars: 18
        }
    }

    game.store = new Store4F(game, deviceType.getDeviceString(), screen_blocker);
    game.store.addProducts(storeProductsData, game.resourceManager.hasResource.bind(game.resourceManager));
    game.store.setStorage(stg.getStoreData.bind(stg), stg.saveStoreData.bind(stg), extra_save_parameters);
    game.store.start();

    game.firebase = new Firebase4F();
    game.firebase.logEvent("game_booted");

    window.game = game; // ova treba da se trgne od production

    game.scene.start('boot');
};

const checkDevice = () => {
    const isDesktop = deviceType.isDesktop();
    const type = deviceType.getDeviceString();

    console.log(TAG, "Detected device type: ", type);

    if (isDesktop) {
        init();
        return startState();
    }

    // Device ready for cordova
    document.addEventListener("deviceready", cordovaReady, false);
    init();
};

function initNotificationManager() {
    game.NotificationManager = new NotificationManager();
}

function initAppVersion() {
    game.appVersion = new AppVersion(deviceType.isDesktop());

    const playerDataGlobal = game.playerData.getGlobal();

    game.appVersion.getVersionNumber()
        .then(number => {
            playerDataGlobal.versionNumber = number;

            if (playerDataGlobal.firstInstalledVersionNumber === undefined)
                playerDataGlobal.firstInstalledVersionNumber = playerDataGlobal.versionNumber;

            return game.appVersion.getVersionCode();
        })
        .then(code => {
            playerDataGlobal.versionCode = code;

            if (playerDataGlobal.firstInstalledVersionCode === undefined)
                playerDataGlobal.firstInstalledVersionCode = playerDataGlobal.versionCode;

            game.playerData.save();
        });
}

// // Just for internal testing
// window.onerror = function (message, url, lineNumber, colno, err) {
//     const lines = lineNumber && colno ? lineNumber + " : " + colno : "";
//     const stack = err && err.stack ? err.stack : "not available";
//     const error = `${message}\nAt line: ${lines}\nAt url: ${url}\nFull stack trace: ${stack}`

//     game.firebase.logError(error)

//     return false;
// };

window.onerror = function (errorMsg, url, line, col, error) {
    console.log(TAG, "An error occured!");
    var logMessage = errorMsg;

    logMessage += ' url: ' + url + '; line=' + line + '; col=' + col;

    if (typeof error === 'object') {
        StackTrace.fromError(error).then(function (trace) {
            game.firebase.logError(logMessage, trace)
                .then(() => { console.log(TAG, "Sent error with stackTrace!"); })
                .catch(() => { console.log(TAG, "Failed sending error with stackTrace!"); });
        });
    } else {
        game.firebase.logError(logMessage)
            .then(() => { console.log(TAG, "Sent error without stackTrace!"); })
            .catch(() => { console.log(TAG, "Failed sending error without stackTrace!"); });
    }
};

document.addEventListener('backbutton',
    () => {
        if (game.backPopUpDisplayed) return;

        const scene = game.scene.add('whatever', new Phaser.Scene(), true);
        game.scene.bringToTop(scene);

        const popUp = new PopUpConfirm({
            scene,
            messageText: 'Are you sure you want to leave Flower Quest?'
        });

        game.backPopUpDisplayed = true;
        popUp.onClose.once('onDestroy', () => {
            game.backPopUpDisplayed = false;
            game.scene.remove(scene);
        });

        popUp.onConfirm.once('confirm', () => {
            if (navigator && navigator.app) navigator.app.exitApp();
        });
    },
    false);

window.addEventListener("load", checkDevice);