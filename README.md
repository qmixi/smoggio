# Smoggio
- Server side rendered app built with React and MobX to check air condition in your area.

#### http://smoggio.herokuapp.com/

## Stack

- React (16.7 beta)
- MobX
- Express
- SCSS
- Webpack

## Quick Start

```shell
$ git clone https://github.com/qmixi/ssr.git
$ cd ssr
$ npm install
$ npm run dev
```
- You have to create `.env` file and past there two necessary variables used by `Airly` and `Google Geocoding` Apis:
```
GEOCODING_API_KEY=your_geocoding_api_key
AIRLY_API_KEY=your_airly_api_key
```


## NPM Commands

|Script|Description|
|---|---|
|`npm run dev`|Start development server @ `localhost:3000`|
