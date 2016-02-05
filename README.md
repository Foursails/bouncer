# Bouncer

use case: 

i have:
	tags you can filter by, e.g. "aurelia" "template"
	a text box, e.g. "matt davis"
	date boxes, "before 2016-01-01", "after 2015-09-01"

the tags should be able to filter a list that matches all

	example input / output
	- ["aurelia", "template"] -> { name: "sentry", tags: ["aurelia", "template", "badass"] }
	- ["aurelia"] -> { name: "sentry", tags: ["aurelia", "template", "badass"] } and { name: "sass", tags: ["aurelia", "sass", "blog"] }

	example implementation
	array | filter: { properties: ["tags"], value: tags, mode: '==' } | filter: { properties: ["category"], value: category, mode: '==' }

the text box should be able to split words and match on multiple fields
	
	example input / output
	- "matt davis" -> { first: "matt", last: "davis" } and { first: "davis", last: "matthews" }
	- "matt" -> { first: "matt", last: "davis" } and { first: "john", last: "matthews" } and { first: "davis", last: "matthews" }

	example implementation
	array | filter: { properties: ["first","last"], value: textInput }

the dateboxes should be similar to the textbox but with customizable arithmetics
	
	example input / output 
	- "< 2015-10-01" and ">= 2015-09-25" -> { date: "2015-09-28", title: "aurelia-dot-net-1" } and { date: "2015-09-29", title: "sentry" }

	example implementation
	array | filter: { properties: ["date"], value: startDate, mode: ">=" } | filter { properties: ["date"], value: endDate, mode: "<" }