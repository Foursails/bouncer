"bundle";!function(){var a=System.get("@@amd-helpers").createDefine();define("app.html!github:systemjs/plugin-text@0.0.4.js",[],function(){return'<template> <require from="components/bouncer"></require> <nav class="navbar navbar-default navbar-fixed-top" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse"> <span class="sr-only">Toggle Navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#"> <img src="img/logo.png"> <span>Bouncer</span> </a> </div> </nav> <section class="page-host container-fluid"> <ul class="list-group col-sm-5 col-sm-offset-1"> <h1 class="list-group-item">Games</h1> <input type="search" class="list-group-item" placeholder="Filter by Title" value.bind="title & debounce: 200"> <li class="list-group-item"> <div class="checkbox"><label> <input type="checkbox" checked.bind="platforms" value="Super Nintendo Entertainment System"> SNES </label></div> <div class="checkbox"><label> <input type="checkbox" checked.bind="platforms" value="Playstation"> Playstation </label></div> </li> <li class="list-group-item checkbox"> <label> <input type="checkbox" checked.bind="random"> Random? </label> </li> <li class="list-group-item" repeat.for="game of games | filter: { on: \'title\', value: title }\n          | filter: { on: \'platforms\', value: platforms, mode: \'exact\', strict: false, update: platforms.length }\n          | filter: { value: random, mode: decideOnAWhim }"> ${game.title} </li> </ul> <ul class="list-group col-sm-5"> <h1 class="list-group-item">Presidents</h1> <input type="search" class="list-group-item" placeholder="Filter by Name" value.bind="name | split: \' \' & debounce: 200"> <input type="number" class="list-group-item" placeholder="From Year" value.bind="from | dateFromYear & debounce: 200"> <input type="number" class="list-group-item" placeholder="To Year" value.bind="until | dateFromYear & debounce: 200"> <li class="list-group-item" repeat.for="pres of presidents \n          | filter: { on: \'end\', value: from, mode: \'>=\' }\n          | filter: { on: \'start\', value: until, mode: \'<\' }\n          | filter: { on: [\'first\',\'last\'], value: name, update: name.length }"> ${pres.first} ${pres.last} </li> </ul> </section> </template>'}),a()}();