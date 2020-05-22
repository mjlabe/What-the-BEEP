'use strict';
import React from 'react';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
} from 'react-native-admob';

import {ADMOB_UNIT_ID} from 'react-native-dotenv';
import {View} from 'react-native';

const AdMobAd = (): Node => (
    <View>
        <AdMobBanner
            adSize="fullBanner"
            adUnitID={ADMOB_UNIT_ID}
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.error(error)}
        />

        // Display a DFP Publisher banner
        <PublisherBanner
            adSize="fullBanner"
            adUnitID={ADMOB_UNIT_ID}
            testDevices={[PublisherBanner.simulatorId]}
            onAdFailedToLoad={error => console.error(error)}
            onAppEvent={event => console.log(event.name, event.info)}
        />

        // Display an interstitial
        AdMobInterstitial.setAdUnitID({ADMOB_UNIT_ID});
        AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
        AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

        // Display a rewarded ad
        AdMobRewarded.setAdUnitID({ADMOB_UNIT_ID});
        AdMobRewarded.requestAd().then(() => AdMobRewarded.showAd());
    </View>
);

export default AdMobAd;
