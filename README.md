# Pokemon Card Scanner
mobile ionic app for scanning pokemon cards and monitoring their value over time

## Running Locally
<br> (Note) To get the starter ionic layout, we called `ionic start MyApp super --type=ionic-angular`  
<br> To run the app in your local browser, open command prompt and navigate to the github repo on your local machine.  
<br> Make sure you've changed directory (cd) into the "MyApp" folder and run `ionic serve`  
<br> The app should launch in your browser at http://localhost:8100/#/tutorial

## COMPETITOR APPS
App Link | App Name | QR Scanner | Card Scanner | Has Current ~Value | Has Historical Values | Has User Portfolios | Num Reviews | Rating
---------|----------|------------|--------------|--------------------|-----------------------|---------------------|-------------|-------
https://apps.apple.com/us/app/pok%C3%A9mon-tcg-card-dex/id1448310257|Pokémon TCG Card Dex|-|-|-|-|-|2.2k|3.3
https://apps.apple.com/us/app/pokellector-card-collector/id600580227|Pokellector: Card Collector|-|-|-|-|-|579|4.5
https://apps.apple.com/us/app/tcg-companion/id1536768130|TCG Companion|-|-|-|-|-|233|4.6
https://apps.apple.com/us/app/pok%C3%A9-tcg-scanner-dragon-shield/id1199495742|Poké TCG Scanner Dragon Shield|-|-|-|-|-|3k|4.5
https://apps.apple.com/us/app/pokefol-io/id1541533637|Pokefol.io|-|-|-|-|-|785|4.7

## Steps Taken to Add Things
### Camera-Preview
`npm install cordova-plugin-camera-preview`
`npm install @ionic-native/camera-preview`
### Preview App on Windows PC inside an Android Emulator
* download Android Studio
* install, launch, and create a new emulation device under Tools > AVD Manager (Pixel 2 works well)
* CRUCIAL: you must have enabled virtual machines in the BIOS menu on startup.  For me, there is a checkbox [] SVM hidden in the bios advanced options somewhere
* run `ionic cordova build android` (it will take a few minutes)
* run `ionic cordova emulate android` (it should launch android studio and play your app on an emulated Pixel 2 or other Android device.
* ^ if it doesn't launch automatically, try openning Android Studio Tools > AVD Manager and start your Pixel 2 / Android device manually there before running `ionic cordova emulate android`

### DEMONSTRATION:
Note: This repository is of a legacy design of the final TCGScan App that I will be releasing on the app store.  Here is a video of the latest cordova webapp build of the repo.

[tcgscan_demo_04_13_2024.webm](https://github.com/brassmonkey381/pokemon_card_scanner/assets/16628252/77f4797d-1df7-42d0-acad-959aa2d92f96)
